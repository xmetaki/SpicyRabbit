import { onUnmounted, Ref } from "vue";

/**
 * 点击非当前元素时 隐藏当前元素
 * @param el 当前元素
 * @param closeRef 控制当前元素显隐的响应式对象
 */
export function useOutSideHidden(el: Ref<HTMLElement>, closeRef: Ref<boolean>) {
    const mouseEventHandler = (event: MouseEvent) => {
        if (!el.value) return
        const eventTarget = event.target as HTMLElement
        if (!el.value.contains(eventTarget)) {
            closeRef.value = false
        }
    }
    document.addEventListener('mousedown', mouseEventHandler)
    onUnmounted(() => {
        document.removeEventListener('mousedown', mouseEventHandler)
    })
}