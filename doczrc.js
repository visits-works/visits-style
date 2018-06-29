import * as path from 'path';

const SRC = path.resolve(__dirname, './src');
const ROOT = path.resolve(__dirname, './');

const modifyBundlerConfig = (config) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@components': `${SRC}/components`,
    '@styles': `${SRC}/styles`,
    '@utils': `${SRC}/utils`,
    '@theme': `${SRC}/theme`,
    '@assets': `${ROOT}/theme/assets`,
    '@website': `${ROOT}/theme`,
  });

  return config;
};

export default {
  title: 'visits-style',
  description: 'design compoentns for visits technology',
  source: 'docs',
  base: process.env.NODE_ENV === 'production' ? '/visits-style' : '/',
  port: '5000',
  indexHtml: 'doc_theme/index.html',
  theme: 'doc_theme/index',
  modifyBundlerConfig,
};
