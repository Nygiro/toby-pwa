const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dev = process.env.NODE_ENV === 'dev'
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

let config = {
    entry: './assets/index.js',
    watch: dev,
    output: {
        path: path.resolve(__dirname, 'dist/javascript'),
        filename: 'main.js',
        publicPath: 'javascript/',
        chunkFilename: 'module/[name].js'
    },
    devtool: dev ? 'source-map' : false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/main.css',
            path: path.resolve(__dirname, 'dist/css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}}
                ]
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new OptimizeCssAssetsPlugin()
    )
}

module.exports = config