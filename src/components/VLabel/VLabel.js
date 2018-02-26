// Styles
import '../../stylus/components/_labels.styl'

// Mixins
import Colorable from '../../mixins/colorable'

export default {
  functional: true,

  name: 'v-label',

  props: {
    color: String,
    focused: Boolean,
    for: String,
    left: {
      type: [Number, String],
      default: 0
    },
    value: Boolean
  },

  render (h, { children, props }) {
    let classes = {
      'v-label--active': props.value
    }

    if (props.focused) {
      classes = Colorable.methods.addTextColorClassChecks(classes, props.color)
    }

    return h('label', {
      staticClass: 'v-label',
      'class': classes,
      style: { left: `${props.left}px` },
      attrs: {
        for: props.for
      }
    }, children)
  }
}
