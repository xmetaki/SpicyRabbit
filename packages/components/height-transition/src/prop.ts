import { ExtractPropTypes } from "vue"

export const heightTransitionProp = {
    isShow: {
        type: Boolean,
        default: true
    }
} as const

export type HeightTransitionPropType = ExtractPropTypes<typeof heightTransitionProp>