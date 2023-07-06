import { ComputedRef, computed } from "vue"
const prefix = 'mt'
// 从prop中提取信息 用来生成组件的class信息
export type ThemeType = 
'primary'
|
'success'
|
'danger'
|
'warning'
|
'error'
|
'default'
|
'info'

export type SizeType = 
'large'
|
'middle'
|
'small'
|
'tiny'

// 风格
export interface StyleType {
    // 主题风格
    theme: ThemeType,
    // 圆角风格
    round: boolean,
    // 简洁风格
    simple: boolean,
    // 朴素风格
    plain: boolean,
    // 尺寸风格
    size: SizeType
}
export default function useClass(
    comName: string, 
    prop: Partial<StyleType>,
    injectClass?: string[]): ComputedRef<string[]> {
    return computed(() => {
        const inject = injectClass ? injectClass : []
        const rawList = [
            `${prefix}_${comName}`,
            prop.theme ? `${prefix}_${comName}__${prop.theme}`: '',
            prop.round ? `${prefix}_${comName}__round`: '',
            prop.simple ? `${prefix}_${comName}__simple`: '',
            prop.plain ? `${prefix}_${comName}__plain`: '',
            prop.size ? `${prefix}_${comName}__${prop.size}`: '',
            ...inject
        ].filter(item => item)
        return rawList
    })
}