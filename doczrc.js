import * as path from 'path';

const SRC = path.resolve(__dirname, 'src');
const ROOT = path.resolve(__dirname, '.');

const modifyBundlerConfig = (config) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@components': `${SRC}/components`,
    '@styles': `${SRC}/styles`,
    '@utils': `${SRC}/utils`,
    '@theme': `${SRC}/theme`,
    '@assets': `${ROOT}/website/assets`,
    '@website': `${ROOT}/website`,
  });

  return config;
};

export default {
  title: 'visits-style',
  description: 'design compoentns for visits technology',
  port: '5000',
  indexHtml: 'public/index.html',
  theme: 'website/src/index',
  modifyBundlerConfig,
};
