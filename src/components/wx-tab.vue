<template>
  <div :style="containerStyle">
   <div :style="barStyle">
     <slot></slot>
   </div>
   <div v-if="displayline">
     <div ref="barline" :style="lineStyle">
     </div>
   </div>
 </div>
</template>

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
      lineActiveColor: {default: '#FF7F24'},
      lineWidth: {default: 3},
      height: {default: 60},
      currentIndex: {default: 0},
      displayline: {default: true}
    },
    created () {
      this.move()
    },
    computed: {
      containerStyle () {
        return {
          height: this.height + 'px',
          marginTop: '40px',
          borderBottomWidth: '1px',
          borderBottomColor: '#E5E5E5',
          borderBottomStyle: 'solid'
        }
      },
      barStyle () {
        return {
          flexDirection: 'row',
          height: (this.height - this.lineWidth - 4) + 'px'
        }
      },
      lineStyle () {
        let width = 750 / this.number
        return {
          width: width + 'px',
          height: this.lineWidth + 'px',
          marginTop: '0px',
          backgroundColor: this.lineActiveColor
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
        let barlineEl = this.$refs.barline
        animation.transition(barlineEl, {
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
