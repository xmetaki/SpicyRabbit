import { ExtractPropTypes, PropType } from "vue";
import { SizeType, ThemeType } from "../../_global/hooks/use-class";

export const timePickerProps = {
    theme: {
        type: String as PropType<ThemeType>,
        default: 'primary'
    },
    time: {
        type: String as PropType<string>,
        required: true,
        default: ""
    },
    size: {
        type: String as PropType<SizeType>,
        default: 'middle'
    }
}

export type TimePickerPropsType = ExtractPropTypes<typeof timePickerProps>