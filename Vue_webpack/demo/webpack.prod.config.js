var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {merge} = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


//清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output:{
        publicPath: '/dist/',
        filename: '[name].[hash].js'
    },
    plugins:[
        //重命名
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new VueLoaderPlugin(),
        //定义当前node环境为生产环境
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: '"production"'
            }
        }),
        //提取模板，并保存入口html文件
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress: false,
                }
            })
        ]
    }
})

