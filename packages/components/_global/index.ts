import { CSSProperties } from "vue"
import type { ArrayToUnion } from "@spicyrabbit/utils/ts-helper"


/**
 * 组件样式类定义
 */
export type ComponentClass = (string | Record<string, unknown>)[]

/**
 * 组件内联css属性定义
 */
export type ComponentStyle = CSSProperties



/**
 * 组件类型定义
 */
export const COMPONENT_TYPE = [
    'primary',
    'success',
    'danger',
    'warning',
    'error',
    'default',
    'info'
] as const
export type ComponentType = ArrayToUnion<typeof COMPONENT_TYPE>

/**
 * 组件尺寸定义
 */
export const COMPONENT_SIZE = [
    'large',
    'middle',
    'small',
    'tiny'
] as const

export type ComponentSize = ArrayToUnion<typeof COMPONENT_SIZE>

