import * as path from 'path';
import tsLoader from 'ts-loader';

function modifyBundlerConfig(config) {
  config.module.rules[2].use = [ { loader: 'ts-loader' } ]

  return config;
}

function modifyBabelRc(babelrc) {
  babelrc.presets = [babelrc.presets[3]];
  // babelrc.babelrc = true;
  // babelrc.presets = [];
  return babelrc;
}

export default {
  title: 'visits-style',
  description: 'design compoentns for visits technology',
  source: '.',
  base: '/visits-style',
  // base: '/',
  port: '5000',
  typescript: true,
  indexHtml: 'doc_theme/index.html',
  theme: 'doc_theme/index',
  modifyBundlerConfig,
  modifyBabelRc,
};
