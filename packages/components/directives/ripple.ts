
import type { Directive, VNode,DirectiveBinding } from "vue"
import { RippleOptions, useRipple } from "../_global/hooks/use-animation"
const name = 'animation-ripple'

const rippleFn: Directive<any, RippleOptions | undefined> = (el:HTMLElement, binding: DirectiveBinding<RippleOptions | undefined>, vnode: VNode) => {
    const value = binding.value
    el.addEventListener('click', (e) => {
        useRipple(e, el, value || {})
    })
}

export const ripple = {
    dName: name,
    logic: rippleFn
}