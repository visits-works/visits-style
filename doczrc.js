import * as path from 'path';

export default {
  title: 'visits-style',
  description: 'design compoentns for visits technology',
  source: '.',
  // base: '/visits-style',
  base: '/',
  port: '5000',
  typescript: true,
  theme: 'doc_theme/index',
  modifyBabelRc: (rc) => {

    rc.presets.splice(0, 2);

    return rc;
  }
};
