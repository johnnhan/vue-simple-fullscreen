/*
 * @Author: johnhan
 * @Date: 2020-01-16 19:09:10
 * @LastEditTime : 2020-01-17 11:48:26
 * @LastEditors  : Please set LastEditors
 * @Description: 全屏相关 API
 * @FilePath: \vue-simple-fullscreen\src\utils.js
 */

/**
 * @description: 检测浏览器是否支持全屏
 * @return: 支持全屏返回 true，否则返回 false
 */
export function supportFullScreen () {
  const doc = document.documentElement
  return ('requestFullscreen' in doc) ||
    ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
    ('msRequestFullscreen' in doc && document.msFullscreenEnabled) ||
    ('webkitRequestFullScreen' in doc)
}

/**
 * @description: 检测页面当前是否处于全屏状态
 * @return: 处于全屏状态返回 true，否则返回 false
 */
export function fullScreenStatus () {
  if (document.fullscreen ||
    document.mozFullScreen ||
    document.fullscreenElement ||
    document.msFullscreenElement ||
    document.webkitIsFullScreen) {
    return true
  } else {
    return false
  }
}

/**
 * @description: 请求全屏
 * @param {Element} element: 需要全屏的 element 元素
 */
export function requestFullscreen (element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else {
    throw new Error('Fullscreen API is not supported.')
  }
}

/**
 * @description: 退出全屏
 */
export function exitFullscreen () {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else {
    throw new Error('Fullscreen API is not supported.')
  }
}

/**
 * @description: 监听全屏事件
 * @param {Function} callback: 进入或退出全屏后的回调函数
 */
export function onFullScreenEvent (callback) {
  document.addEventListener('fullscreenchange', callback)
  document.addEventListener('mozfullscreenchange', callback)
  document.addEventListener('MSFullscreenChange', callback)
  document.addEventListener('webkitfullscreenchange', callback)
}

/**
 * @description: 取消监听全屏事件
 * @param {type} callback: 进入或退出全屏后的回调函数
 */
export function offFullScreenEvent (callback) {
  document.removeEventListener('fullscreenchange', callback)
  document.removeEventListener('mozfullscreenchange', callback)
  document.removeEventListener('MSFullscreenChange', callback)
  document.removeEventListener('webkitfullscreenchange', callback)
}
