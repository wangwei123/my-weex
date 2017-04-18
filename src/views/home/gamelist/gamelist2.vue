<template>
  <list ref="tab2" tabIndex="1" class="list" @loadmore="fetch" loadmoreoffset="10">
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">TTTTTT{{num}}</text>
      </div>
    </cell>
  </list>
</template>

<style scoped>
.content {
    position: absolute;
    top: 0; left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
}
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
      lists: [1, 2, 3, 4, 5]
    },
    methods: {
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
