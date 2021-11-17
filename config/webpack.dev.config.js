/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-11-16 15:08:55
 * @description: webpack 开发环境配置
 */
const path = require("path")
const webpack = require('webpack');
module.exports = {
    devServer: {
        // contentBase: './dist',
        //端口号
        port: '8080',
        compress: false, // webpack5中把  inline 改成了 compress,
        open: true, // 自动打开浏览器
        hot: true, //允许热加载
    },
    //启用source-map方便调试
    devtool: 'source-map',
    plugins: [
        //定义模块内的全局变量
        new webpack.DefinePlugin({
            //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
            DEV: JSON.stringify('dev'),
        }),
    ],
};