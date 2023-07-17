import gsap from 'gsap'
export type RippleOptions = {
    rippleColor: string //涟漪颜色
}
export type HeightTransOptions = {
    height?: number // 过渡到目标高度，如果不设置则按照内容撑开
    active: boolean // true-变高过渡 false-变低过渡
}
/**
 * 涟漪效果
 * @param e Event事件
 * @param el 目标元素节点
 * @param rippleOptions 自定义涟漪配置
 */
export function useRipple(e: MouseEvent, el: HTMLElement, rippleOptions: Partial<RippleOptions>) {
    
    const sideLength = 50
    const ripple = document.createElement("div")
    ripple.classList.add("mt_ripple")
    ripple.style.width = `${sideLength}px`
    ripple.style.height = `${sideLength}px`
    if (rippleOptions.rippleColor) {
        ripple.style.backgroundColor = rippleOptions.rippleColor
    }
    const { left, top } = el.getBoundingClientRect()
    el.style.position = 'relative'
    el.style.overflow = 'hidden'
    // 让ripple节点在父容器中居中
    ripple.style.left = e.clientX - left - sideLength /2 + 'px'
    ripple.style.top = e.clientY - top - sideLength / 2 + 'px'
    // 添加到父容器
    el.appendChild(ripple)
    // 添加动效
    gsap.to(ripple, {
        duration: 1, 
        opacity: 0,
        scale: 2,
        ease: 'power1.out',
        onComplete: () => {
            ripple.parentElement?.removeChild(ripple)
        }
    })
}


/**
 * 高度过渡效果
 * @param el 
 * @param options 
 */
export const useHeightTransition = (el: HTMLElement, options: HeightTransOptions) => {
    if (!el) return
    const targetHeight = options.height ? `${options.height}px`: 'auto'
    if (options.active) {
        gsap.fromTo(el, {
            "height": "0px"
        }, {
            "height": targetHeight,
        })
    } else {
        gsap.fromTo(el, {}, {
            "height": "0px"
        })
    }
}