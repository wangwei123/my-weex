<template>
  <div>
   <div class="row">
     <slot></slot>
   </div>
   <div class="row">
     <div ref="barLine" :style="barStyle">
     </div>
   </div>
 </div>
</template>

<style scoped>
 .row{
   flex-direction: row;
   height: 60px;
 }
</style>

<script>
  import { parentMixin } from '../mixins/multi-items'
  const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')
  module.exports = {
    mixins: [parentMixin],
    props: {
      fontSize: {default: '26px'},
      defaultColor: {default: '#000'},
      activeColor: {default: '#FF7F24'},
      activeClass: {default: ''},
      barActiveColor: {default: '#FF7F24'},
      lineWidth: {default: 3},
      currentIndex: {default: 0}
    },
    created () {
      this.move()
    },
    computed: {
      barStyle () {
        let width = 750 / this.number
        return {
          width: width + 'px',
          height: this.lineWidth + 'px',
          backgroundColor: this.barActiveColor
        }
      },
      left () {
        let width = 750 / this.number
        let left = this.currentIndex * width
        return left
      }
    },
    methods: {
      move: function() {
        let barLineEl = this.$refs.barLine
        animation.transition(barLineEl, {
          styles: {
            transform: 'translate('+ this.left +'px, 0px)',
            transformOrigin: 'center center'
          },
          duration: 200, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          modal.toast({ message: 'animation finished.' })
        })
      }
    }
  }
</script>
