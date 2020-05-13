const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {

    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next])
        return prev
    }, {})

    return {
        devtool: 'inline-source-map',
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.min.js',
            publicPath: '/'
        },
        devServer: {
            port: 8080,
            historyApiFallback: true
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.DefinePlugin(envKeys)
        ],
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: ['ts-loader', 'eslint-loader']
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                },
                {
                    test: /\.(less|css)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: ['file-loader']

                }
            ]
        }
    }
}