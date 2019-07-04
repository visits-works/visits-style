
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/docs`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "types",
        path: `${__dirname}/node_modules/visits-style`,
        ignore: [
          '**/*.js',
          '**/*.tsx',
          '**/*.json',
          '**/*.map',
          '**/*.test.d.ts',
          '**/visits-style/index.d.ts',
          '**/utils/**',
          '**/visits-style/types.d.ts',
          '**/visits-style/theme.d.ts',
          '**/components/index.d.ts',
          '**/elements/index.d.ts',
          '**/forms/index.d.ts',
          '**/styles/normalize.d.ts',
          '**/Icons/**',
        ],
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx'],
      }
    },
  ]
}
