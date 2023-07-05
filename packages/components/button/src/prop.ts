import { ExtractPropTypes, PropType } from 'vue'
import { ComponentType,ComponentSize } from '../../_global'

export const ButtonProps = {
    type: {
        type: String as PropType<ComponentType>,
        default: 'default'
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default'
    }
}

export type ButtonPropType = ExtractPropTypes<typeof ButtonProps>