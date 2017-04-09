/**
 * @author walid
 * @date 2017/3/4
 * @description 界面跳转工具类
 */

import qs from 'qs'
import ip from 'config'
import instance from 'utils/weex/instance'
import route from 'router/route'
let navigator = weex.requireModule('navigator')

function getBaseUrl() {
  let bundleUrl = weex.config.bundleUrl
  let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
  let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('.app') > 0
  let nativeBase = ''
  if (isAndroidAssets) {
    nativeBase = 'file://assets/dist/weex/'
  } else if (isiOSAssets) {
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('weex/') + 5)
  } else {
    let host = `${ip}:8080`
    let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
    if (matches && matches.length >= 2) {
      host = matches[1]
    }
    nativeBase = `http://${host}/dist/weex/`
  }
  let h5Base = '?page=../dist/web/'
  // // in Browser or WebView
  let inBrowserOrWebView = typeof window === 'object'
  return inBrowserOrWebView ? h5Base : nativeBase
}

function pushWeb(url, query) {
  if (instance.isWeb()) {
    pushByUrl(url, query)
    return
  }
  query = query ? query : {}
  query.url = url
  push(route.web, query)
}

function pushByUrl(url, query) {
  navigator.push({
    url: query ? `url?${qs.stringify(query)}` : url,
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

function push(route, query = {}) {
  query.title = route.title | ''
  let url = query ? `${getBaseUrl()}${route.jsPath}.js?${qs.stringify(query)}` : `${getBaseUrl()}${route}.js`
  navigator.push({
    url,
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

function pop() {
  navigator.pop({
    animated: 'true'
  }, event => {
    console.log('callback: ', event)
  })
}

export default {
  push, pushByUrl, getBaseUrl, pushWeb, pop
}
