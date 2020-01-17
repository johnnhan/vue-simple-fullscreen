<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { supportFullScreen, fullScreenStatus, requestFullscreen, exitFullscreen, onFullScreenEvent, offFullScreenEvent } from './utils'

export default {
  data () {
    return {
      supportFullScreen: false,
      isFullScreen: false,
    }
  },
  methods: {
    toggle () {
      fullScreenStatus() ? this.exit() : this.enter()
    },
    exit () {
      this.supportFullScreen && exitFullscreen()
    },
    enter () {
      if (this.supportFullScreen) {
        onFullScreenEvent(this.callback)
        requestFullscreen(this.$el)
      }
    },
    callback () {
      this.isFullScreen = fullScreenStatus()
      !this.isFullScreen && offFullScreenEvent()
      this.$emit('change', this.isFullScreen)
    }
  },
  created () {
    this.supportFullScreen = supportFullScreen()
  }
}
</script>