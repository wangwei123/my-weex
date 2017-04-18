## my-weex
1. 基于weex和vue2.0，支持weex和weexpack构建工具.
2. 将weex官方的.we组件修改为.vue组件，并开发了一些其他组件
3. 对组件在iOS和android平台的兼容性做了优化处理

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

### 页面截图:
 <img src="https://github.com/wangwei123/my-weex/blob/master/preview_images/76C44C53-B7A3-4331-B823-25EA7CB9974E.png" width="70%" alt=""/>
<img src="https://github.com/wangwei123/my-weex/blob/master/preview_images/4AF6D7F5-66A9-4F88-AD20-4048C97568B1.png" width="70%" alt=""/>

## 项目启动

1. git clone https://github.com/wangwei123/my-weex
2. cd my-weex
3. 安装weexpack
```
npm install -g weexpack
```

4. 安装依赖包
```
npm install
```
5. 开发调试模式启动
```
 ./serve-start
```
6. 本地文件模式启动
```
./local-start
```
### iOS 运行
```
//需安装pod依赖工具
weexpack run ios
```
### android 运行
```
weexpack run android
```

### h5 启动方式

打开 [http://localhost:8080/web/index.html](http://localhost:8080/web/index.html)

或者：

```
weexpack run web
```
