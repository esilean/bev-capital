/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common(), {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
})
