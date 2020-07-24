'use strict';

var outerClick = {
  bind: function bind(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };

    document.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
};

var ToolTip = document.createElement('div');
ToolTip.setAttribute('class', 'wt-tooltip-container');
ToolTip.setAttribute('id', 'wt_tooltip');
ToolTip.style.display = 'none';
document.getElementsByTagName('body')[0].append(ToolTip);

var hideTooltip = function hideTooltip() {
  ToolTip.style.display = 'none';
};

var showTooltip = function showTooltip(el, message) {
  var getBox = el.getBoundingClientRect();
  setToolTipPosition(getBox);
  setToolTipInnerText(message);
  ToolTip.style.display = 'block';
};

var setToolTipInnerText = function setToolTipInnerText(msg) {
  ToolTip.innerHTML = msg;
};

var setToolTipPosition = function setToolTipPosition(targetBox) {
  ToolTip.style.position = 'fixed';
  ToolTip.style.left = targetBox.x + targetBox.width / 2 + 'px';
  ToolTip.style.top = targetBox.y + targetBox.height + 'px';
};

var AddToolTip = function AddToolTip(el, message) {
  el.addEventListener('mouseover', showTooltip.bind(null, el, message));
  el.addEventListener('mouseout', hideTooltip);
};

var RemoveToolTip = function RemoveToolTip(el) {
  el.removeEventListener('mouseover', showTooltip);
  el.removeEventListener('mouseout', hideTooltip);
};

var WtToolTip = {
  AddToolTip: AddToolTip,
  RemoveToolTip: RemoveToolTip
};

var wtTooltip = {
  isLiteral: true,
  inserted: function inserted(el, binding, vnode) {
    var msg = binding.value || binding.expression;
    WtToolTip.AddToolTip(el, msg);
  },
  unbind: function unbind(el, binding, vnode) {
    WtToolTip.RemoveToolTip(el);
  }
};

var index = {
  wtOuterClick: outerClick,
  wtToolTip: wtTooltip
};

module.exports = index;
