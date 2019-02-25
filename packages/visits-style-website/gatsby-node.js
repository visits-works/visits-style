const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const path = require("path");
const docgen = require('react-docgen-typescript');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx {
            edges {
              node {
                id
                fields {
                  slug
                }
                code {
                  scope
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug ? node.fields.slug : "/",
            component: path.resolve("./src/docs.tsx"),
            context: {
              id: node.id
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
        path.resolve(__dirname, "../visits-style/src"),
        "node_modules",
      ],
      alias: {
        '@components': path.resolve(__dirname, "../visits-style/src/components"),
        '_components': path.resolve(__dirname, "./src/components"),
        '_assets': path.resolve(__dirname, "./src/assets"),
        '@utils': path.resolve(__dirname, "../visits-style/src/utils"),
        '@styles': path.resolve(__dirname, "../visits-style/src/styles"),
        '@theme': path.resolve(__dirname, "../visits-style/src/theme"),
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
  const res = { name, description, required, type: type.name };
  res.defaultValue = defaultValue ? defaultValue.value : defaultValue;
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
      value = (value === 'index') ? '/' : value.replace('/index', '');
    }

    createNodeField({
      name: 'slug',
      node,
      value: `/${value}`
    });
  } else if (node.internal.type === 'File' && node.sourceInstanceName === 'components') {
    const value = parseMeta(parse(node.absolutePath));
    createNodeField({
      name: 'meta',
      node,
      value,
    });
  }
};
