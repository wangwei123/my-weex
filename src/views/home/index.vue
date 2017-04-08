<template>
  <wx-navpage class="wx-navpage" data-role="none" :height="navBarHeight" background-color="#ff5898" :title="title" title-color="white" left-item-title="More" left-item-color="white" right-item-src="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png">
   <wx-tab v-model="index">
      <wx-tab-item @onItemClick="myhandler" selected>已发货</wx-tab-item>
      <wx-tab-item @onItemClick="myhandler">未发货</wx-tab-item>
      <wx-tab-item @onItemClick="myhandler">测试</wx-tab-item>
      <wx-tab-item @onItemClick="myhandler">全部订单</wx-tab-item>
  </wx-tab>
 </wx-navpage>
</template>

<style scoped>
.wx-navpage {
  margin-top:60px;
}
</style>

<script>
  const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')
  module.exports = {
    data: {
      navBarHeight: 88,
      title: 'Navigator1',
      dir: 'examples',
      baseURL: '',
      selectedIndex: 0,
      isActive: true,
      index: 0
    },
    created: function() {
      this.$getConfig(function (config) {
        let env = config.env
        if(env.platform == 'iOS') {
          let scale = env.scale
          let deviceWidth = env.deviceWidth / scale
          this.navBarHeight = 64.0 * 750.0 / deviceWidth
        }
      }.bind(this))
      this.$on('naviBar.rightItem.click', function(e) {
        duration = 2
        this.$call('modal', 'toast', {
          'message': 'naviBar.rightItem.click',
          'duration': duration
        })
      })
      this.$on('naviBar.leftItem.click', function(e){
        duration = 2
        this.$call('modal', 'toast', {
          'message': 'naviBar.leftItem.click',
          'duration': duration
        })
      })
    },
    methods: {
      myhandler: function() {
        // modal.alert({'message': 'test'})
      }
    }
  }
</script>
