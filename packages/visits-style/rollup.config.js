import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';
import shebangPlugin from '@jaredpalmer/rollup-plugin-preserve-shebang';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/visits-style.es.js',
      format: 'es',
      name: 'visits-style',
      exports: 'named',
      freeze: false,
      esModule: false,
      treeshake: {
        propertyReadSideEffects: false,
      },
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    {
      file: 'build/visits-style.cjs.js',
      format: 'cjs',
      name: 'visits-style',
      exports: 'named',
      freeze: false,
      esModule: false,
      treeshake: {
        propertyReadSideEffects: false,
      },
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      namedExports: {
        'node_modules/polished/lib/color/getLuminance.js': ['named'],
      },
    }),
    json(),
    sourceMaps(),
    typescript({
      typescript: require('typescript'),
      cacheRoot: './.rts2_cache_build',
      tsconfigDefaults: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          jsx: 'react',
        },
      },
      tsconfigOverride: {
        compilerOptions: {
          target: 'esnext',
        },
      },
    }),
    babel({
      exclude: /node_modules/,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser({
      sourcemap: true,
      output: { comments: false },
      compress: {
        keep_infinity: true,
        pure_getters: true,
        collapse_vars: false,
      },
      ecma: 5,
      toplevel: true,
      warnings: true,
    }),
    shebangPlugin({
      shebang: undefined,
    }),
  ],
};
