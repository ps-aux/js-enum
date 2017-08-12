/*
* Taken from https://github.com/krasimir/webpack-library-starter
*/

const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')
const env = require('yargs').argv.env // use --env with webpack 2

const libraryName = require('./package.json').name

const plugins = []
let outputFile = null

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({minimize: true}))
    outputFile = libraryName + '.min.js'
} else {
    outputFile = libraryName + '.js'
}

const config = {
    entry: path.resolve(__dirname, 'src/Enum.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: outputFile,
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
