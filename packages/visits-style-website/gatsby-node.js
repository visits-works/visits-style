const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug ? node.fields.slug : "/",
            component: componentWithMDXScope(
              path.resolve("./src/docs.tsx"),
              node.code.scope
            ),
            context: {
              id: node.id
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
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
    }
  });
};

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
  }
};
