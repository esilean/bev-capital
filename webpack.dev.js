/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = () => {

  return merge(common(), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
  })
}
