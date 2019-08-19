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
            },
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
        path.resolve(__dirname, "./src"),
        path.resolve(__dirname, '../visits-style/src'),
        'node_modules',
      ],
      alias: {
        '_components': path.resolve(__dirname, "./src/components"),
        '_assets': path.resolve(__dirname, "./src/assets"),
        'visits-style': path.resolve(__dirname, '../visits-style/src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, '../visits-style/src'),
          ],
          exclude: /node_modules/,
          loader: loaders.js(),
        },
      ],
    },
  });
};

const parseConfig = {
  propFilter: (prop) => {
    if (
      prop.name === 'as'
      || prop.name === 'ref'
      || prop.name === 'theme'
    ) {
      return false;
    }
    if (prop.parent == null) {
      return true;
    }
    return (
      prop.parent.fileName.indexOf('node_modules/@types/react') < 0
      && prop.parent.fileName.indexOf('node_modules/@types/styled-components') < 0
    );
  },
  componentNameResolver: (exp, source) => exp.getName() === 'StyledComponentClass' && getDefaultExportForFile(source),
};
const parse = docgen.withDefaultConfig(parseConfig).parse;

function parsePropsItem({ name, description, required, type, defaultValue }) {
  return {
    name,
    description,
    required,
    type: type.name,
    defaultValue: (defaultValue ? defaultValue.value : null),
  };
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
  } else if (
    node.internal.type === 'File'
    && node.sourceInstanceName === 'types'
  ) {
    const value = parseMeta(parse(node.absolutePath));
    let name = '';
    if (
      node.relativePath.indexOf('index.tsx') > -1
      || node.relativePath.indexOf('index.ts') > -1
    ) {
      const str = node.relativePath.split('/');
      name = str[1];
    } else {
      name = node.relativePath
        .substring(node.relativePath.lastIndexOf('/') + 1, node.relativePath.length)
        .replace('.tsx', '')
        .replace('.ts', '');
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
