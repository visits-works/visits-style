
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        ['babel-plugin-styled-components', { pure: true, displayName: false }]
      ],
      env: {
        production: {
          plugins: ['polished'],
        },
        test: {
          plugins: ['@babel/transform-modules-commonjs'],
        }
      }
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
