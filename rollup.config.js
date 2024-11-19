import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
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
    url({ include: '**/*.svg', limit: 0,  }), svgr({ icon: true, svgoConfig: { plugins: [ { name: 'removeViewBox', active: false, }, ], }, }),
    postcss({
      extract: 'styles.css', 
      minimize: true, 
      modules: false, 
    }),
  ],
  external: ['react', 'react-dom'],
};
