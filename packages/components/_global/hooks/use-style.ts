/**
 * 全局通用的样式相关的hooks
 */

import { ComputedRef, computed } from "vue"
import { type ComponentType, type ComponentSize, COMPONENT_TYPE, COMPONENT_SIZE, ComponentStyle, ComponentClass } from ".."


export interface UseStyleProp  {
    type: ComponentType | null,
    size: ComponentSize | string | number
}


export interface UseStyleReturn {
    getType: (t?: ComponentType) => ComputedRef<ComponentType>,
    getSize: (t?: ComponentSize) => ComputedRef<ComponentSize | string | number>
}



/**
 * 样式钩子
 * @param prop 组件props属性
 * @returns 响应式的当前type和size
 */
export default function useStyle(prop?: Partial<UseStyleProp>): UseStyleReturn {
    const getType = (t: ComponentType = 'default'): ComputedRef<ComponentType> => {
        return computed(() => {
            if (!prop || !prop.type || !COMPONENT_TYPE.includes(prop.type)) {
                return t
            }
            return prop.type
        })
    }

    const getSize = (t: ComponentSize = 'middle') : ComputedRef<ComponentSize | string | number> => {
        return computed(() => {
            if (!prop || !prop.size || !COMPONENT_SIZE.includes(prop.size as ComponentSize)) {
                return t
            }
            return prop.size
        })
    }

    return {
        getType,
        getSize
    }
}


export type UseStyleList = ComputedRef<ComponentStyle>
export type UseClassList = ComputedRef<ComponentClass>