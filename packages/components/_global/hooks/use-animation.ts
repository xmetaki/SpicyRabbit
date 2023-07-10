import gsap from 'gsap'
type RippleOptions = {
    rippleColor: string
}
export function useRipple(e: MouseEvent, el: HTMLElement, rippleOptions:RippleOptions) {
    
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