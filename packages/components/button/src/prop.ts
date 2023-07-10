import { ExtractPropTypes, PropType } from "vue";
import { SizeType, ThemeType } from "../../_global/hooks/use-class";

export const buttonProps = {
    theme: {
        type: String as PropType<ThemeType>,
        default: 'primary'
    },
    round: {
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
    },
    ripple: {
        type: Boolean,
        default: false
    },
    rippleColor: {
        type: String
    }
}
export type ButtonPropType = ExtractPropTypes<typeof buttonProps>