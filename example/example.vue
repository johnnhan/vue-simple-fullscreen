<template>
  <div class="layout">
    <full-screen class="full-screen" ref="fullscreen" @change="statusChange">
      <div class="full-screen-text">Hello world!</div>
      <div class="full-screen-button" @click="handler">{{isFullScreen ? "退出全屏" : "全屏"}}</div>
    </full-screen>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFullScreen: false
    }
  },
  methods: {
    handler () {
      this.$refs['fullscreen'].toggle()
    },
    statusChange (status) {
      this.isFullScreen = status
    }
  }
}
</script>

<style scoped>
.layout {
  width: 960px;
  height: 540px;
  color: #fff;
}
.full-screen-text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.full-screen-button {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 14px;
  cursor: pointer;
}
.full-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ff8888;
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>