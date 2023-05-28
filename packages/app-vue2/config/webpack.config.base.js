const path = require('path');
const HTMLwebpackplugin = require('html-webpack-plugin')
// vue 配置
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    devtool:'source-map',    //哪种类型的map
    entry: {
        main:path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.scss', '.css'],
        alias:{
            '@': path.resolve(__dirname, '../src')
        }
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, '../src')],
                use: ['eslint-loader',{
                        loader: 'babel-loader'
                    }
                ]             //babel-loader的具体设置
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [{
                    loader: 'vue-loader',
                    options:{
                        hotReload: true,
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name]_[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HTMLwebpackplugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html',
            chunksSortMode: 'none',
            minify:{
                removeAttributeQuotes:true,   //删除引号，删除不需要引号的值
                removeComments:true           //删除注释，但是会保留script和style中的注释
            },
            // inlineSource: 'runtime~.+\\.js',
        }),
        new VueLoaderPlugin(),
    ]
}