import { ExtractPropTypes, PropType } from "vue"
import { SizeType } from "../../_global/hooks/use-class"

type INPUT_TYPE = 'text' | 'password' | 'textArea'
export const inputProps = {
    type: {
        type: String as PropType<INPUT_TYPE>,
        default: 'text'
    },
    size: {
        type: String as PropType<SizeType>,
        default: 'middle'
    },
    placeholder: {
        type: String,
        default: ''
    },
    pwdSwitch: {
        type: Boolean,
        default: false
    }
}

export type InputPropsType = ExtractPropTypes<typeof inputProps>