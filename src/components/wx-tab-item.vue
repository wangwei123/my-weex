<template>
  <div class="item" @click="onItemClick">
      <text :style="style">
        <slot></slot>
      </text>
  </div>
</template>

<style scoped>
.item {
   flex:1;
   justify-content: center;
   align-items: center;
 }
</style>
<script>
import { childMixin } from '../mixins/multi-items'
let modal = weex.requireModule('modal')
export default {
  mixins: [childMixin],
  props: {

  },
  computed: {
    style () {
      return {
        color: this.$parent.index === this.currentIndex ?
        this.$parent.activeColor : this.$parent.defaultColor,
        fontSize: this.$parent.fontSize
      }
    }
  },
  methods: {
    onItemClick (hasLink) {
      this.currentSelected = true
      this.$parent.currentIndex = this.currentIndex

      this.$parent.move()
      this.$nextTick(() => {
        this.$emit('onItemClick', {
          index: this.currentIndex
        })
      })

      if (hasLink === true) {
        // go(this.link, this.$router)
      }
    }
  }
}
</script>
