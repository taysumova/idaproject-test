const webpack = require('webpack')
const merge = require('webpack-merge')
const basicWebpackConfig = require('./webpack.basic.config')

const devWebpackConfig = merge(basicWebpackConfig, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: basicWebpackConfig.externals.dist,
        port: 8081,
        overlay: true
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})