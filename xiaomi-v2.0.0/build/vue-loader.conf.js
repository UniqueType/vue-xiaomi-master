var utils = require('./utils')
var config = require('../config')
var px2rem = require('postcss-plugins-px2rem')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: function () {
     return [px2rem({
      remUnit: 16 // 默认 75
    })];
  }
}
