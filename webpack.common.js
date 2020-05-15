/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].bundle.[hash].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: ['ts-loader', 'eslint-loader'],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.(less|css)$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: ['file-loader'],
        },
      ],
    },
  }
}
