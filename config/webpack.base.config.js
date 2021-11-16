/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-11-16 15:08:21
 * @description:webpack 基本配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: "react-antd-template-admin",
        template: "./public/index.html",
    })],
};