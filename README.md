## weex-vue
fork自weexframe，将weex官方的.we组件修改为.vue组件，并开发了一些其他组件.

### 官方组件支持：
1. wx-button
2. wx-countdown
3. wx-hn
4. wx-list-item
5. wx-marquee
6. wx-navbar
7. wx-navpage
8. wx-panel
9. wx-tabbar
10. wx-tabitem
11. wx-tip

### 新开发的组件：
1. wx-tab
2. wx-tab-item

## 项目启动

1. git clone https://github.com/wangwei123/weex-vue
2. cd weex-vue
3. 安装weexpack

```
npm install -g weexpack
```

4. npm install
5. 设置调试环境
```
// 调试本地serve
npm run init serve
// 调试assets或者jsbundle文件
npm run init local
```
6. 执行 ./start

### android 启动
```
weexpack run android
```

### iOS 启动
```
weexpack run ios
```

### h5 启动方式

打开 [http://localhost:8080/web/index.html](http://localhost:8080/web/index.html)
 
或者：

```
weexpack run web
```
