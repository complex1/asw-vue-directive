import aswToolTip from './asw_tooltip'
const aswTooltip = {
  isLiteral: true,
  inserted: function (el, binding, vnode) {
    const msg = binding.value || binding.expression
    aswToolTip.AddToolTip(el, msg)
  },
  unbind: function (el, binding, vnode) {
    aswToolTip.RemoveToolTip(el)
  }
}

export default aswTooltip
