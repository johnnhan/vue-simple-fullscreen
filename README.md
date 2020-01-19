# vue-simple-fullscreen

### 安装

```
npm i vue-simple-fullscreen
```

### 使用

```js
import Vue from 'vue'
import FullScreen from 'vue-simple-fullscreen'
Vue.use(FullScreen)
```

### 示例

```html
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
```

### 方法

toggle: 用于切换全屏的状态，在父组件中通过 `this.$refs['fullscreen'].toggle()` 调用

### 事件

change: 全屏状态切换时会触发该事件，回调函数的参数 status 指代当前是否为全屏，类型为布尔值
