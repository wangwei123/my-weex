<template>
    <div class="wrapper">
        <embed
          class="content"
          :style="{visibility: item.visibility}"
          v-for="(item, index) in tabItems"
          :src="item.src"
          :key="index"
          type="weex">
        </embed>
        <div class="tabbar" append = "tree">
            <wx-tabitem
              v-for="(item, index) in tabItems"
              :index="item.index"
              :icon="item.icon"
              :title="item.title"
              :title-color="item.titleColor"
              :key="index"
              @tabItemOnClick="tabItemOnClick">
            </wx-tabItem>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        width: 750;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .content {
        position: absolute;
        top: 0; left: 0;
        right: 0;
        bottom: 0;
        margin-top: 0;
        margin-bottom: 88;
    }
    .tabbar {
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 88;
    }
</style>

<script>
  const modal = weex.requireModule('modal')
  module.exports = {
    props: {
      tabItems: {default: []},
      selectedColor: {default: '#ff0000'},
      unselectedColor: {default: '#000000'}
    },
    data() {
      return {
        selectedIndex: 0
      }
    },
    components: {
      'wx-tabitem': require('./wx-tabitem.vue')
    },
    created: function () {
      this.selected(this.selectedIndex)
    },
    methods: {
      tabItemOnClick (e) {
        //modal.alert({'message': e.index})
        this.selectedIndex = e.index
        this.selected(e.index)
        this.$emit('tabBarOnClick', e)
      },
      selected (index) {
        for(let i = 0; i < this.tabItems.length; i++) {
          let tabItem = this.tabItems[i]
          if(i == index){
            tabItem.icon = tabItem.selectedImage
            tabItem.titleColor = this.selectedColor
            tabItem.visibility = 'visible'
          } else {
            tabItem.icon = tabItem.image
            tabItem.titleColor = this.unselectedColor
            tabItem.visibility = 'hidden'
          }
        }
      }
    }
  }
</script>
