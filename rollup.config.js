import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';


export default {
  input: 'index.js',
  output: {
    file: 'lib/maz-smart-search.js',
    format: 'cjs'
  },
  plugins: [
    commonjs({
      sourceMap: false
    }), // prise en charge de require
    resolve({
      browser: true
    }), // prise en charge des modules depuis node_modules
    babel({
      exclude: 'node_modules/**'
    }), // transpilation
    terser() // minification
  ]
};