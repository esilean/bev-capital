/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const dotenv = require('dotenv')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return merge(common(), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  })
}
