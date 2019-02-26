import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/visits.js',
      format: 'es',
      name: 'visits-style',
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
      sourcemap: 'inline',
    },
    {
      file: 'build/visits.cjs.js',
      format: 'cjs',
      name: 'visits-style',
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
      sourcemap: 'inline',
    }
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      namedExports: {
        'node_modules/polished/lib/color/getLuminance.js': [ 'named' ]
      }
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ]
};
