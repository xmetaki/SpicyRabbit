import { ExtractPropTypes, PropType } from "vue"

export const heightTransitionProp = {
    isShow: {
        type: Boolean,
        default: true
    },
    duration: {
        type: Number as PropType<number>
    },
    height: {
        type: String as PropType<string>, //指定展开过渡的目标高度
        default: 'auto'
    }
} as const

export type HeightTransitionPropType = ExtractPropTypes<typeof heightTransitionProp>