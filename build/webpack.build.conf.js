const merge = require('webpack-merge')
const basicWebpackConfig = require('./webpack.basic.config')

const buildWebpackConfig = merge(basicWebpackConfig, {
    mode: "production",
    plugins: [

    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})