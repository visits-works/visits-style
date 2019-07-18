const path = require("path");
const docgen = require('react-docgen-typescript');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx {
            nodes {
              id
              fields {
                slug
              }
              frontmatter {
                import
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages.
        result.data.allMdx.nodes.forEach(({ fields, id, frontmatter }) => {
          createPage({
            path: fields.slug ? fields.slug : '/',
            component: path.resolve(__dirname, './src/docs.tsx'),
            context: {
              id,
              import : frontmatter.import,
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, "src"),
        "node_modules",
      ],
      alias: {
        '_components': path.resolve(__dirname, "./src/components"),
        '_assets': path.resolve(__dirname, "./src/assets"),
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: modulePath =>
            /node_modules/.test(modulePath) &&
            // whitelist specific es6 module
            !/node_modules\/@mdx-js\/tag/.test(modulePath),
          use: loaders.js(),
        },
      ],
    },

  });

};

const parseConfig = {
  propFilter: {
    skipPropsWithoutDoc: true,
  },
  componentNameResolver: (exp, source) => {
    if (exp.getName() === 'StyledComponentClass') {
      const res = docgen.getDefaultExportForFile(source);
      return res;
    }
  },
};
const parse = docgen.withDefaultConfig(parseConfig).parse;

function parsePropsItem({ name, description, required, type, defaultValue }) {
  if (name.indexOf('aria-') > -1) return;
  const res = {
    name,
    description,
    required,
    type: type.name,
    defaultValue: defaultValue ? defaultValue.value : defaultValue,
  };
  return res;
}

function parseMeta(meta) {
  let res = [];
  if (meta && meta.length > 0) {
    res = meta.map((item) => {
      const props = Object.keys(item.props).map(keys => parsePropsItem(item.props[keys])).filter(a => a);
      return { name: item.displayName, props };
    });
  }
  return res;
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, "");

    if (value.indexOf("index") > -1) {
      value = (value === 'index') ? '' : value.replace('/index', '');
    }

    createNodeField({
      name: 'slug',
      node,
      value: `/${value}`
    });
  } else if (node.internal.type === 'File' && node.sourceInstanceName === 'types') {
    const value = parseMeta(parse(node.absolutePath));
    let name = '';
    if (node.relativePath.indexOf('index.d.ts') > -1) {
      const str = node.relativePath.split('/');
      name = str[1];
    } else {
      name = node.relativePath.substring(0, node.relativePath.indexOf('/')).replace('.d.ts', '');
    }
    createNodeField({
      name: 'component',
      node,
      value: name,
    });
    createNodeField({
      name: 'meta',
      node,
      value,
    });
  }
};
