const path = require('path');
const base = require('./webpack.config.base.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 服务器端渲染需要
// const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = merge(base,{
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin({
                cache: true,//是否启动缓存
                sourceMap: false,//是否可以生成sourcemap文件   //是否生成map 如果false devtool的设置就无效
                parallel: true //是否可以并行压缩
            }),
            //压缩CSS文件
            new optimizeCssAssetsWebpackPlugin()
        ],
        splitChunks: {
            //使用缓存提高效率
            cacheGroups: {
                //第三方把公共的第三方的模块都打包单独的文件中去 vendor.js
                vender: {
                    test: /node_modules/, // 如果模块的路径匹配这个规则
                    chunks: "initial", //代码块是直接引用
                    name: "vendor", //给打包出的文件起一个名字 vendor.js
                    priority: 10,
                    enforce: true
                },
                //把多个页面之间的公共的模块提取出来
                commons: {
                    chunks: "initial", //代码块是直接引用
                    minChunks: 2, //使用次数必须大于等2次才会提取出来，
                    maxInitialRequests: 5,
                    minSize: 0 // 单独提取的文件的最上字节数
                }
            }
        }
    },
    // resolve: {
    //     alias: {
    //         vue: 'vue/dist/vue.runtime.min.js'   //运行时 (生产环境)  不需要编译的情况下可以交给vue-loader                 //别名 在vue包中package.json "main": "dist/vue.runtime.common.js",  所以这个地方需要指出引入的vue 其实是'vue/dist/vue.js'
    //     }
    // },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [{
                    loader:MiniCSSExtractPlugin.loader,
                    options: {
                        
                    }
                },{
                    loader: 'css-loader',
                    
                },{
                    loader: 'postcss-loader'
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader:MiniCSSExtractPlugin.loader,
                    options: {
                        
                    }
                }, 'css-loader', 'less-loader']
            },
        ]
    },
    plugins:[
        // new CleanWebpackPlugin([
        //     path.resolve(__dirname, '../dist')
        // ]),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: path.resolve(__dirname, '../dist/static')
        }]),
        new MiniCSSExtractPlugin({
            filename: 'static/js/[name].css',//提取保存后的文件名
            chunkFilename: 'static/css/[id].css'//代码块
        }),
        // new ExtractTextPlugin({
        //     filename: path.resolve(__dirname+'../dist/static/css/[name].[contenthash].css')
        // }),
        // new VueSSRClientPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),   //等同于写 mode: 'production'
        new webpack.BannerPlugin('this is created by xlei')
    ]
})