
module.exports = {
  siteMetadata: {
    title: 'visits-style',
    description: 'react style guide for VISITS Technologies',
    docsLocation: 'https://github.com/visits-works/visits-style/tree/develop/docs/content'
  },
  pathPrefix: '/visits-style',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../src/components/`
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    'gatsby-transformer-react-docgen',
  ]
}
