/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

var common = require('./webpack.common.config');

module.exports = {
  output: {
    filename: 'main.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  
  resolve: common.resolve,
  entry: common.entry,

  stats: {
    colors: true,
    reasons: true
  },

  module: common.module
};
