const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: false,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js'),
    },
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules'],
  },
  compilers: {
    less: {
      compress: prod,
    },
    sass: {
      outputStyle: 'compressed',
    },
    babel: {
      sourceMap: true,
      presets: ['env'],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ],
    },
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://huoke.prod.k12.vip'
        : 'https://huoke.test.k12.vip',
    // tryIdsStr:
    //   process.env.NODE_ENV === 'production'
    //     ? '1173617051253350402,1173617224285790210,1173617415734796289'
    //     : '1171996022454611970,1173422970690228225,1173505182493532161',
    tryIdsStr:
      process.env.NODE_ENV === 'production'
        ? '1171996022454611970,1173422970690228225,1173505182493532161'
        : '1171996022454611970,1173422970690228225,1173505182493532161',
  },
}

module.exports.plugins = {
  px2units: {
    filter: /\.wxss$/,
    config: {
      comment: 'no',
    },
  },
}

if (prod) {
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}
  // 压缩js
  module.exports.plugins = {
    ...module.exports.plugins,
    uglifyjs: {
      filter: /\.js$/,
      config: {},
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
      },
    },
  }
}
