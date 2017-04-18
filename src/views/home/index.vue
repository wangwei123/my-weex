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

  <scroller scroll-direction="horizontal">
    <list ref="tab0"  class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell">
        <div style="flex-direction:row;margin-top:10px;margin-bottom:10px;">
          <image style="width:100px;height:100px;margin-left:20px;" src="http://f1.img4399.com/ma~a_26444~105x105?1490663772"></image>
          <div style="flex-direction:column;margin-left:30px;justify-content:center;">
            <text style="font-size:28px;">梦幻西游OL</text>
            <text style="font-size:24px;">5665下载  196M</text>
            <text style="font-size:24px;">回合制游戏</text>
          </div>
        </div>
      </cell>
      <cell class="cell">
        <div style="flex-direction:row;margin-top:10px;margin-bottom:10px;">
          <image style="width:100px;height:100px;margin-left:20px;" src="http://f1.img4399.com/ma~a_big_105875~250x250?1491371648"></image>
          <div style="flex-direction:column;margin-left:30px;justify-content:center;">
            <text style="font-size:28px;">九阳神功:起源</text>
            <text style="font-size:24px;">5665下载  196M</text>
            <text style="font-size:24px;">回合制游戏</text>
          </div>
        </div>
      </cell>
      <cell class="cell">
        <div style="flex-direction:row;margin-top:10px;margin-bottom:10px;">
          <image style="width:100px;height:100px;margin-left:20px;" src="http://f1.img4399.com/ma~a_big_93079~250x250?1490593729"></image>
          <div style="flex-direction:column;margin-left:30px;justify-content:center;">
            <text style="font-size:28px;">部落冲突:皇室战争</text>
            <text style="font-size:24px;">5665下载  196M</text>
            <text style="font-size:24px;">回合制游戏</text>
          </div>
        </div>
      </cell>
    </list>
    <list ref="tab1" class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell" v-for="num in lists">
        <div class="panel">
          <text class="text">text{{num}}</text>
        </div>
      </cell>
    </list>
    <list ref="tab2" tabIndex="1" class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell" v-for="num in lists">
        <div class="panel">
          <text class="text">content{{num}}</text>
        </div>
      </cell>
    </list>
    <list ref="tab3" tabIndex="1" class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell" v-for="num in lists">
        <div class="panel">
          <text class="text">content{{num}}</text>
        </div>
      </cell>
    </list>
  </scroller>
 </wx-navpage>
</template>

<style scoped>
.cell {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #E5E5E5;
}
.list {
  width: 750;
  height: 960;
}
.panel {
   width: 600px;
   height: 250px;
   margin-left: 75px;
   margin-top: 35px;
   margin-bottom: 35px;
   flex-direction: column;
   justify-content: center;
   border-width: 2px;
   border-style: solid;
   border-color: rgb(162, 217, 192);
   background-color: rgba(162, 217, 192, 0.2);
 }
 .text {
   font-size: 50px;
   text-align: center;
   color: #41B883;
 }
</style>

<script>
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
      showTabIndex: 0
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
        const el = this.$refs['tab' + index]
        dom.scrollToElement(el, {})
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
