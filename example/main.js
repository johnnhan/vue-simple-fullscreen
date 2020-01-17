// 打包前的组件测试
// import FullScreen from '../src/main.js'
// 打包后的组件测试
import FullScreen from '../dist/vue-simple-fullscreen.umd.js'
import Vue from 'vue'
import Example from './example.vue'

Vue.use(FullScreen)

new Vue({
  render: h => h(Example),
}).$mount('#app')
