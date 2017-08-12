/*
* Taken from https://github.com/krasimir/webpack-library-starter
*/

const path = require('path')

const libraryName = require('./package.json').name

const plugins = []

const config = {
    entry: path.resolve(__dirname, 'src/Enum.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: libraryName + '.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('.')],
        extensions: ['.json', '.js']
    },
    plugins: plugins
}

module.exports = config
