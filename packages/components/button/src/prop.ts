import { PropType } from 'vue'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
export const ButtonProps = {
    type: {
        type: String as PropType<ButtonType>,
        default: 'primary'
    },
    hahaMsg: {
        type: String,
        default: 'haha'
    }
}