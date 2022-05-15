/*
 * @Author: jweboy
 * @Date: 2021-09-29 23:03:22
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 18:23:08
 */

const { resolve } = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  title: 'Cloud',
  template: resolve('public/index.html'),
  output: {
    publicPath: isDev ? '/' : '/cloud/',
  },
  resolve: {
    alias: {
      stream: require.resolve('stream-browserify'),
    },
  },
};
