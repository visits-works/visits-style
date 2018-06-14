import * as path from 'path';

const SRC = path.resolve(__dirname, 'src');
const ROOT = path.resolve(__dirname, '.');

const modifyBundlerConfig = (config) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@components': `${SRC}/components`,
    '@styles': `${SRC}/styles`,
    '@utils': `${SRC}/utils`,
    '@assets': `${ROOT}/docs/assets`,
  });

  return config;
};

export default {
  source: './src',
  files: './docs/**/*.mdx',
  title: 'visits-style',
  description: 'design compoentns for visits technology',
  port: '5000',
  wrapper: 'src/wrapper',
  // theme: 'docs/src/index',
  modifyBundlerConfig,
};
