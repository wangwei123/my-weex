import App from './App.web.vue'
import router from 'router'
import VueProgressBar from 'vue-progressbar'

Vue.component('wx-button', require('components/wx-button'))
Vue.component('wx-countdown', require('components/wx-countdown'))
Vue.component('wx-hn', require('components/wx-hn'))
Vue.component('wx-list-item', require('components/wx-list-item'))
Vue.component('wx-marquee', require('components/wx-marquee'))
Vue.component('wx-navbar', require('components/wx-navbar'))
Vue.component('wx-navpage', require('components/wx-navpage'))
Vue.component('wx-panel', require('components/wx-panel'))
Vue.component('wx-tabbar', require('components/wx-tabbar'))
Vue.component('wx-tabitem', require('components/wx-tabitem'))
Vue.component('wx-tip', require('components/wx-tip'))
Vue.component('wx-tab', require('components/wx-tab'))
Vue.component('wx-tab-item', require('components/wx-tab-item'))

// 安装全局配置module
weex.registerModule('user', {
  getUser (callBack) {
    callBack({
      userId: '312790',
      token: 'b636f162-ef52-47a1-aeb6-76323f294a79'
    })
  }
})

Vue.use(VueProgressBar, {
  thickness: '5px',
  color: '#00bf11',
  autoRevert: true,
  location: 'top',
  inverse: false
})

new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: {
    App
  }
})

router.push('/')
