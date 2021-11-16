/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-11-16 15:08:21
 * @description:webpack 基本配置
 */

const path = require('path');
// 重新打包前，清除打包文件夹
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
//生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//将css提取到单独的文件中
const MiniCssExtract = require('mini-css-extract-plugin');
//css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
//压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//引入webpack
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js',
    },
    // 项目中 别名的配置
    resolve: {
        // extensions: [".js", "jsx", "tsx", ".vue", ".json", ".css", "less", "scss"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },

    // loader 配置
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    // MiniCssExtract.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true, // 启动 或者 禁用  url 解析功能.  url(./tang.jpg);
                            import: true, // 是否允许 或者说 禁用 @import 语法处理 @import "base.css"
                            modules: true, // 是否允许 css 模块化
                            sourceMap: true, // 是否生成 sourceMap
                            // importLoaders: true, // 放在 CSS 兼容性的时候演示
                            // 默认情况下,  css-loader 会生成一个使用 ES Module的模块对象, 如果你设置为 true 的话, 那就会包装成 ESMODULES,导出是一个对象
                            // 用 let styles2  = require ("./index.css") 方式引入时, {default:{}} 中 default 才是对应的 css 对象
                            esModule: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    // MiniCssExtract.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader"
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    // MiniCssExtract.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader"
                    },
                    'sass-loader'
                ]
            },
        ]
    },

    plugins: [
        //使用插件清除dist文件夹中的文件
        new CleanWebpackPlugin({
            path: path.resolve(__dirname, '../dist'),
        }),
        // 使用插件生成Html入口文件
        new HtmlWebpackPlugin({
            title: "react-antd-template-admin",
            template: "./public/index.html",
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true, //删除双引号,
                collapseWhitespace: true, //压缩成一行，
            },
            hash: true
        }),
        //提取css到style.css中
        new MiniCssExtract({
            filename: 'style.css'
        }),
    ],
};