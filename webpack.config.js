/**
 * webpack 配置文件
 */
const path = require("path")
 const { merge } = require('webpack-merge');
 const baseConfig = require(path.resolve(__dirname,"config/webpack.base.config"))
 const devConfig = require(path.resolve(__dirname,"config/webpack.base.config"))
 const prodConfig = require(path.resolve(__dirname,"config/webpack.base.config"))

 module.exports = (env, args) => {
     console.log("webpack 配置文件 -->>",env,args)
    switch(args.mode) {
      case 'development':
        return merge(baseConfig, devConfig);
      case 'production':
        return merge(baseConfig, prodConfig);
      default:
        throw new Error('No matching configuration was found!');
    }
  }