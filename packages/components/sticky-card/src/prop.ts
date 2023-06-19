import { ChangeHandler } from "@spicyrabbit/utils/ts-helper"
import { ExtractPropTypes, PropType } from "vue"


export const stickyCardProp = {
    autoExpand: {
        type: Boolean,
        default: true
    },
    collapseText: {
        type: String,
        default: '折叠'
    },
    expandText: {
        type: String,
        default: '展开'
    },
    onExpand: {
        type: Function as PropType<ChangeHandler>
    },
    onCollapse: {
        type: Function as PropType<ChangeHandler>
    }
} as const

export type StickyCardPropType = ExtractPropTypes<typeof stickyCardProp>

