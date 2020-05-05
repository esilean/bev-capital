const path = require('path')

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: './bundle.js',
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.less$/,
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
