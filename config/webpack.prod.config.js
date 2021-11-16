/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-11-16 15:09:26
 * @description: webpack 生产环境配置
 */

const path = require("path")
const webpack = require('webpack');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    optimization: {
        minimizer: [
            //压缩CSS代码
            new OptimizeCss(),
            //压缩js代码
            new UglifyJsPlugin({
                //启用文件缓存
                cache: true,
                //使用多线程并行运行提高构建速度
                parallel: true,
                //使用 SourceMaps 将错误信息的位置映射到模块
                sourceMap: true
            })
        ]
    },
    plugins: [
        //使用插件定义全局变量DEV
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production')
        })
    ]

};