<template>
    <div class="wrap" @onappear="appeared" @ondisappear="disappeared">
        <div id="anim" class="anim">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.wrap {
    overflow: hidden;
    position: relative;
}

.anim {
    flex-direction: column;
    position: absolute;
    transform: translateY(0) translateZ(0);
}
</style>

<script>
module.exports = {
  data: {
    step: 0,
    count: 0,
    index: 1,
    duration: 0,
    interval: 0,
    outofview: false
  },
  ready: function () {
    if (this.interval > 0 && this.step > 0 && this.duration > 0) {
      this.nextTick()
    }
  },
  methods: {
    nextTick: function() {
      let self = this
      if (this.outofview) {
        setTimeout(self.nextTick.bind(self), self.interval)
      } else {
        setTimeout(function() {
          self.animation(self.nextTick.bind(self))
        }, self.interval)
      }
    },
    animation: function(cb) {
      let self = this
      let offset = -self.step * self.index
      let $animation = require('@weex-module/animation')
      $animation.transition(this.$el('anim'), {
        styles: {
          transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
        },
        timingFunction: 'ease',
        duration: self.duration
      }, function() {
        self.index = (self.index + 1) % (self.count)
        self.$emit('change', {
          index: self.index,
          count: self.count
        })
        cb && cb()
      })
    },
    appeared: function() {
      this.outofview = false
    },
    disappeared: function() {
      this.outofview = true
    }
  }
}
</script>
