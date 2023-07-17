
import type {DirectiveBinding, ObjectDirective } from "vue"
import { RippleOptions, useRipple } from "../_global/hooks/use-animation"
const name = 'animation-ripple'
type ClickHandler = ((e: MouseEvent) => void ) | undefined | null

// 获取指令处理逻辑
const getLogic = (): ObjectDirective<HTMLElement, RippleOptions | undefined> => {
    let clickHandler: ClickHandler
    return {
        mounted(el: HTMLElement, binding: DirectiveBinding<RippleOptions | undefined>) {
            clickHandler = (e: MouseEvent) => {
                useRipple(e, el, value || {}) 
            }
            const value = binding.value
            el.addEventListener('click', clickHandler)
        },
        unmounted(el: HTMLElement) {
            if (clickHandler) {
                el.removeEventListener('click', clickHandler)
                clickHandler = null
            }
        }
    }
}


export const ripple = {
    dName: name,
    logic: getLogic()
}