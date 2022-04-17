import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'gitarra',
      file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
      format: 'umd', // umd 是兼容 amd/cjs/iife 的通用打包格式，适合浏览器
    },
    {
      name: 'gitarra',
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
    {
      name: 'gitarra',
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
