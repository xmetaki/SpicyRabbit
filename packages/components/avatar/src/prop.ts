import { ExtractPropTypes, PropType } from "vue";
import { SizeType, ThemeType } from "../../_global/hooks/use-class";

export const avatarProps = {
    theme: {
        type: String as PropType<ThemeType>,
        default: 'primary'
    },
    size: {
        type: String as PropType<SizeType>,
        default: 'middle'
    },
    text: {
        type: String,
        default: '',
        require: false
    },
    round: {
        type: Boolean,
        default: false
    },
    source: {
        type: String,
        default: '',
        require:false
    },
    bgColor: {
        type: String,
    }
}

export type AvatarPropType = ExtractPropTypes<typeof avatarProps>