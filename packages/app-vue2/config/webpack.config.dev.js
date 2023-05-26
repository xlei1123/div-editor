const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const path = require('path');
module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: 8081,
        contentBase: path.resolve(__dirname, '../src'),
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',

                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    plugins: []
})