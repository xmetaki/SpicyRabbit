import { Ref } from "vue"
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
export const useScrollItTo = (dom: Element, position?: number ) => {
    if (!dom) return
    const current = dom as HTMLElement
    const parent: HTMLElement = current.parentNode as HTMLElement
    const pointCut = position ? position : parent.offsetHeight / 2
    let scrollTop =current.offsetTop - pointCut
    scrollTop = scrollTop < 0 ? 0 : scrollTop
    console.log(current.offsetTop,scrollTop)
    gsap.to(parent, {
        scrollTo: {
            y: scrollTop
        }
    })
}