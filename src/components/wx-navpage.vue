<template>
  	<div class="wrapper">
    	  <wx-navbar class="navbar"
        :data-role="dataRole"
        :height="height"
        :background-color="backgroundColor"
        :title="title"
        :title-color="titleColor"
        :left-item-src="leftItemSrc"
        :left-item-title="leftItemTitle"
        :left-item-color="leftItemColor"
        :right-item-src="rightItemSrc"
        :right-item-title="rightItemTitle"
        :right-item-color="rightItemColor">
      </wx-navbar>
  	  <div class="wrapper" :style="{marginTop: height}">
  		    <slot></slot>
  	  </div>
  	</div>
</template>

<style scoped>
  	.wrapper {
  		position: absolute;
  		top: 0;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		width: 750;
  	}
    .navbar {
      margin-top:40px;
    }
</style>

<script>
    module.exports = {
      components: {
        'wx-navbar': require('./wx-navbar.vue')
      },
      props: {
        dataRole: { default: 'navbar' },
        backgroundColor: { default: 'black' },
        height: { default: 88 },
        title: { default: '' },
        titleColor: { default: 'black' },
        rightItemSrc: { default: '' },
        rightItemTitle: { default: '' },
        rightItemColor: { default: 'black' },
        leftItemSrc: { default: '' },
        leftItemTitle: { default: '' },
        leftItemColor: { default: 'black' }
      }
    }
</script>
