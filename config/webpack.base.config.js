/**
 * webpack的基本配置
 */
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const path = require('path');
 
 module.exports = {
     mode:"development",
     entry: path.resolve(__dirname,"../src/index.js"),
     output: {
         path: path.resolve(__dirname, '../dist'),
         filename: 'index_bundle.js',
     },
     plugins: [new HtmlWebpackPlugin({
         title: "react-antd-template-admin",
         template: "./public/index.html",
     })],
 };