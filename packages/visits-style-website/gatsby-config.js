const path = require('path');

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
        path: path.resolve(__dirname, '../visits-style/src'),
        ignore: [
          '**/*.js',
          '**/*.json',
          '**/*.map',
          '**/setupTest.ts',
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.story.tsx',
          '**/visits-style/index.ts',
          '**/utils/**',
          '**/hooks/**',
          '**/visits-style/types.ts',
          '**/visits-style/theme.ts',
          '**/components/index.ts',
          '**/elements/index.ts',
          '**/forms/index.ts',
          '**/styles/normalize.ts',
          '**/Icons/**',
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
      }
    },
  ]
}
