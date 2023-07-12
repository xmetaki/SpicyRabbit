import { ExtractPropTypes, PropType } from "vue";
import { SizeType, ThemeType } from "../../_global/hooks/use-class";

export const switchProps = {
    theme: {
        type: String as PropType<ThemeType>,
        default: 'primary'
    },
    round: {
        type: Boolean,
        default: true
    },
    size: {
        type: String as PropType<SizeType>,
        default: 'small'
    }
}

export type SwitchPropsType = ExtractPropTypes<typeof switchProps>