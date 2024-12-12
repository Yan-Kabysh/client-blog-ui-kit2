import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    svgr({
      icon: true,
      svgoConfig: {
        plugins: [{ name: 'removeViewBox', active: false }],
      },
    }),
    url({
      include: ['**/*.svg'],
      limit: 8192,
    }),
    postcss({
      extract: 'styles.css',
      minimize: true,
      modules: false,
    }),
  ],
  external: ['react', 'react-dom'],
};
