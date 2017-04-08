/**
 * @author walid
 * @date 2016/03/20
 * @description weex 打包配置
 */

const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const fs = require('fs-extra')

const bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  {raw: true}
)

function getEntryFileContent(entryPath, vueFilePath) {
  const relativePath = path.relative(path.join(entryPath, '../'), vueFilePath);
  return `
/**
 * @author walid
 * @date 2016/03/20
 * @description 程序入口启动配置
 */

const App = require("${relativePath}")

// 全局注册组件
Vue.component('osc-root', require("components/osc-root"))
Vue.component('osc-navpage', require("components/osc-navpage"))
Vue.component('osc-navbar', require("components/osc-navbar"))
Vue.component('osc-tabbar', require("components/osc-tabbar"))
Vue.component('osc-list', require("components/osc-list"))
Vue.component('osc-scroller', require("components/osc-scroller"))
Vue.component('wx-button', require("components/wx-button"))
Vue.component('wx-countdown', require("components/wx-countdown"))
Vue.component('wx-hn', require("components/wx-hn"))
Vue.component('wx-list-item', require("components/wx-list-item"))
Vue.component('wx-marquee', require("components/wx-marquee"))
Vue.component('wx-navbar', require("components/wx-navbar"))
Vue.component('wx-navpage', require("components/wx-navpage"))
Vue.component('wx-panel', require("components/wx-panel"))
Vue.component('wx-tabbar', require("components/wx-tabbar"))
Vue.component('wx-tabitem', require("components/wx-tabitem"))
Vue.component('wx-tip', require("components/wx-tip"))
Vue.component('wx-tab', require("components/wx-tab"))
Vue.component('wx-tab-item', require("components/wx-tab-item"))

App.el = '#root'
new Vue(App)
`
}

const entry = {}

function walk(dir) {
  dir = dir || '.'
  let directory = path.join(__dirname, './src', dir)
  let entryDirectory = path.join(__dirname, './src/entry');
  fs.readdirSync(directory)
    .forEach(file => {
      let fullpath = path.join(directory, file)
      let stat = fs.statSync(fullpath)
      let extname = path.extname(fullpath)
      if (stat.isFile() && (extname === '.vue' || extname === '.we')) {
        let entryFile = path.join(entryDirectory, dir, path.basename(file, extname) + '.js')
        fs.outputFileSync(entryFile, getEntryFileContent(entryFile, fullpath))
        // let name = path.join('build', dir, path.basename(file, extname))
        let name = path.join(dir, path.basename(file, extname))
        entry[name] = entryFile + '?entry=true'
        // && file !== 'components'
      } else if (stat.isDirectory()) {
        let subdir = path.join(dir, file)
        walk(subdir)
      }
    })
}

walk()

function getBaseConfig() {
  return {
    entry: entry,
    output: {
      path: 'dist'
    },
    resolve: {
      extensions: ['', '.js', '.vue', '.we'],
      fallback: [path.join(__dirname, './node_modules')],
      alias: {
        'assets': path.resolve(__dirname, './src/assets/'),
        'components': path.resolve(__dirname, './src/components/'),
        'constants': path.resolve(__dirname, './src/constants/'),
        'api': path.resolve(__dirname, './src/api/'),
        'router': path.resolve(__dirname, './src/router/'),
        'store': path.resolve(__dirname, './src/store/'),
        'views': path.resolve(__dirname, './src/views/'),
        'mixins': path.resolve(__dirname, './src/mixins'),
        'config': path.resolve(__dirname, './config'),
        'utils': path.resolve(__dirname, './src/utils/'),
        'styles': path.resolve(__dirname, './src/styles/')
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.vue$/,
          loader: 'eslint',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'eslint',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }, {
          test: /\.(we|vue)(\?[^?]+)?$/,
          loaders: []
        }, {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    vue: {
      postcss: [cssnext({
        features: {
          autoprefixer: false
        }
      })]
    },
    plugins: [bannerPlugin]
  }
}

const webConfig = getBaseConfig()
webConfig.entry = {
  entry: path.resolve('./src/entry.js')
}
webConfig.output = {
  path: 'dist/web',
  filename: '[name].js'
}
webConfig.module.loaders[1].loaders.push('weex')

const weexConfig = getBaseConfig()
weexConfig.output.filename = 'weex/[name].js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
