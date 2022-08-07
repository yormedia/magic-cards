import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import ignore from './rollup-plugins/ignore';
import { ignoreTextfieldFiles } from './elements/ignore/textfield';
import { ignoreSelectFiles } from './elements/ignore/select';
import { ignoreSwitchFiles } from './elements/ignore/switch';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  file: "magic-cards.js",
  host: '10.35.15.4',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
  }),
  dev && serve(serveopts),
  !dev && terser(),
  ignore({
    files: [...ignoreTextfieldFiles, ...ignoreSelectFiles, ...ignoreSwitchFiles].map((file) => require.resolve(file)),
  }),
];

export default [
  {
    input: 'src/magic-cards.ts',
    output: {
      dir: 'dist',
      // file: "magic-cards.js",
      format: 'es',
    },
    plugins: [...plugins],
  },
];
