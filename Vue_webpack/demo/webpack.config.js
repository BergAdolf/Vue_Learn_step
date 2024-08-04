var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

var config = {
    mode:'development',
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename:'main.js'
    },
    devServer:{
        static:'../demo'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ 
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options:{
                    limit: 1024,
                    name : 'images/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        //重命名
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new VueLoaderPlugin()
    ], 
};

module.exports = config;