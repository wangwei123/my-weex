<template>
  <wx-navpage class="wx-navpage" data-role="none" background-color="#FF4500" :title="title" title-color="white" right-item-src="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png">
   <wx-tab v-model="index"
    fontSize="28"
    height="70"
    activeColor="#FF4500"
    lineActiveColor="#FF4500"
    :displayline="true">
      <wx-tab-item @onItemClick="myhandler(0)" selected>新游推荐</wx-tab-item>
      <wx-tab-item @onItemClick="myhandler(1)">排行榜</wx-tab-item>
      <wx-tab-item @onItemClick="myhandler(2)">手游</wx-tab-item>
      <wx-tab-item @onItemClick="myhandler(3)">H5游戏</wx-tab-item>
  </wx-tab>
  <embed class="content" :style="{visibility:selectedIndex == 0 ? 'visible':'hidden'}"
    :src="path0", key="0" type="weex"></embed>
  <embed class="content" :style="{visibility:selectedIndex == 1 ? 'visible':'hidden'}"
    :src="path1", key="1" type="weex"></embed>
  <embed class="content" :style="{visibility:selectedIndex == 2 ? 'visible':'hidden'}"
    :src="path2", key="2" type="weex"></embed>
  <embed class="content" :style="{visibility:selectedIndex == 3 ? 'visible':'hidden'}"
    :src="path3", key="3" type="weex"></embed>
 </wx-navpage>
</template>

<style scoped>
.content {
    position: absolute;
    top: 120;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
}
</style>

<script>
  import route from 'router/route'
  import navigator from 'utils/modules/navigator'
  const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  const LOADMORE_COUNT = 4
  module.exports = {
    data: {
      scrollerHeight: 1050,
      navBarHeight: 88,
      title: '游戏盒子',
      lists: [1, 2, 3, 4, 5],
      selectedIndex: 0,
      path0: (navigator.getBaseUrl() + 'views/home/gamelist/gamelist0.js'),
      path1: (navigator.getBaseUrl() + 'views/home/gamelist/gamelist1.js'),
      path2: (navigator.getBaseUrl() + 'views/home/gamelist/gamelist2.js'),
      path3: (navigator.getBaseUrl() + 'views/home/gamelist/gamelist3.js')
    },
    computed: {
      displayStyle0() {
        return this.selectedIndex == 0 ? 'visible':'hidden'
      },
      displayStyle1() {
        return this.selectedIndex == 1 ? 'visible':'hidden'
      },
      displayStyle2() {
        return this.selectedIndex == 2 ? 'visible':'hidden'
      },
      displayStyle3() {
        return this.selectedIndex == 3 ? 'visible':'hidden'
      }
    },
    created: function() {
      let env = this.$getConfig().env
      let scale = env.scale
      let deviceWidth = env.deviceWidth / scale
      if(env.platform == 'iOS') {
        this.scrollerHeight = env.deviceHeight - this.navBarHeight - 77
      } else {
        this.scrollerHeight = env.deviceHeight - this.navBarHeight
      }

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
      myhandler: function(index) {
        this.selectedIndex = index
        //modal.alert({'message': navigator.getBaseUrl() + 'views/home/gamelist/gamelist0.js'})
        //const el = this.$refs['tab' + index]
        //dom.scrollToElement(el, {})
        // modal.alert({'message': 'test' + index})
      },
      fetch (event) {
        modal.toast({ message: 'loadmore', duration: 1 })
        setTimeout(() => {
          const length = this.lists.length
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1)
          }
        }, 800)
      }
    }
  }
</script>
