
module.exports = {
  stories: ['../packages/**/*.story.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  // temporary disable due to build error from
  // https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'none',
  },
}