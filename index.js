import aswDirective from './src'
export default {
  install (Vue) {
    Vue.directive('asw-outside', aswDirective.aswOuterClick)
    Vue.directive('asw-tooltip', aswDirective.aswToolTip)
  }
}
