/**
 * @author walid
 * @date 2017/03/02
 * @description IndexUrl 配置到native
 */

const fs = require('fs')
const path = require('path')
const ip = require('ip').address()
// 获取输入参数
const yargs = require('yargs')
const argv = yargs.argv

console.log('argv._[0]', argv._[0])

let indexURL = `http://${ip}:8080/dist/weex/App.js`
let androidIndexURL = argv._[0] === 'local' ? 'weex/App.js' : indexURL

// android 主机地址操作
let androidConfigFile = path.join(__dirname, '../android.config.json')
let androidConfig =
  `
{
  "AppName": "WeexVue",
  "AppId": "com.yueting.weex",
  "SplashText": "HelloWeex",
  "WeexBundle": "${androidIndexURL}"
}

`
fs.writeFile(androidConfigFile, androidConfig, function (err) {
  if (err) {
    throw err
  }
  console.log('android写入INDEX_URL成功')
})

// iOS 主机地址操作
let iOSConfigFile = path.join(__dirname, '../platforms/ios/WeexVue/AppDefine.h')
let iOSIndexURL = argv._[0] === 'local' ? '[NSString stringWithFormat:@"file://%@/bundlejs/weex/App.js",[NSBundle mainBundle].bundlePath]' : `[NSString stringWithFormat:@"${indexURL}"]`

let iOSConfig =
  `
#ifndef AppDefine_h
#define AppDefine_h

#define INDEX_URL ${iOSIndexURL}
#endif
`

fs.writeFile(iOSConfigFile, iOSConfig, function (err) {
  if (err) {
    throw err
  }
  console.log('iOS写入INDEX_URL成功')
})
