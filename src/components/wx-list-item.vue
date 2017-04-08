<template>
  <div class="item" @ontouchstart="touchstart" @ontouchend="touchend"
             :style="{backgroundColor: bgColor}">
    <slot></slot>
  </div>
</template>

<script>
  module.exports = {
    data: {
      bgColor: '#ffffff'
    },
    methods: {
      touchstart: function() {
      },
      touchend: function() {
      }
    }
  }
</script>

<style scoped>
  .item {
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 35px;
    padding-right: 35px;
    height: 160px;
    justify-content: center;
    /*margin-bottom: 1px; FUTURE */
    border-bottom-width: 1px;
    border-color: #dddddd;
  }
</style>
