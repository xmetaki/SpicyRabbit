import { ExtractPropTypes, PropType } from "vue";
import { SizeType, ThemeType } from "../../_global/hooks/use-class";

export const tagProps = {
    theme: {
        type: String as PropType<ThemeType>,
        default: 'primary'
    },
    round: {
        type: Boolean,
        default: false
    },
    simple: {
        type: Boolean,
        default: false
    },
    plain: {
        type: Boolean,
        default: false
    },
    size: {
        type: String as PropType<SizeType>,
        default: 'middle'
    } 
}

export type TagPropsType = ExtractPropTypes<typeof tagProps>