import './asw_tooltip.css'
const ToolTip = document.createElement('div')
ToolTip.setAttribute('class', 'asw-tooltip-container')
ToolTip.setAttribute('id', 'asw_tooltip')
ToolTip.style.display = 'none'
document.getElementsByTagName('body')[0].append(ToolTip)

const hideTooltip = function () {
  ToolTip.style.display = 'none'
}

const shoaswooltip = function (el, message) {
  const getBox = el.getBoundingClientRect()
  setToolTipPosition(getBox)
  setToolTipInnerText(message)
  ToolTip.style.display = 'block'
}

const setToolTipInnerText = function (msg) {
  ToolTip.innerHTML = msg
}

const setToolTipPosition = function (targetBox) {
  ToolTip.style.position = 'fixed'
  ToolTip.style.left = targetBox.x + targetBox.width / 2 + 'px'
  ToolTip.style.top = targetBox.y + targetBox.height + 'px'
}

const AddToolTip = function (el, message) {
  el.addEventListener('mouseover', showTooltip.bind(null, el, message))
  el.addEventListener('mouseout', hideTooltip)
}

const RemoveToolTip = function (el) {
  el.removeEventListener('mouseover', showTooltip)
  el.removeEventListener('mouseout', hideTooltip)
}

export default {
  AddToolTip,
  RemoveToolTip
}
