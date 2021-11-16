/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-11-16 15:06:41
 * @description: webpack的配置文件,根据不同需求,加载不同环境配置
 */
const path = require("path")
const {
  merge
} = require('webpack-merge');
const baseConfig = require(path.resolve(__dirname, "config/webpack.base.config"))
const devConfig = require(path.resolve(__dirname, "config/webpack.dev.config"))
const prodConfig = require(path.resolve(__dirname, "config/webpack.prod.config"))

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return merge(baseConfig, devConfig);
    case 'production':
      return merge(baseConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}