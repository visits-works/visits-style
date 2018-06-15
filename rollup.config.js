import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import eslint from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: { 'styled-components': 'styled' },
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: { 'styled-components': 'styled' },
    }
  ],
  external: ['styled-components'],
  plugins: [
    resolve({
      jsnext: true,
    }),
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Children', 'createElement', 'Component', 'PureComponent', 'Fragment'],
      },
    }),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}
