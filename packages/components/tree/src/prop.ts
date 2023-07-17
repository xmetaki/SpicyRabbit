import { ExtractPropTypes, PropType } from "vue";
import { ThemeType } from "../../_global/hooks/use-class";

interface TreeMapOption {
    label: string,
    children: string,
    value: string
}

export interface TreeData  {
    label: string,
    children: TreeData[],
    value: unknown,
    data: Record<string, unknown>,
    level: number,
    expand: boolean,
    isShow: boolean,
    isLeaf: boolean
}

export const treeProps = {
    theme: {
        type: String as PropType<ThemeType>,
        default: 'primary'
    },
    data: {
        type: Array as PropType<Record<string, unknown>[]>,
        default: []
    },
    mapped: {
        type: Object as PropType<TreeMapOption>,
        default: () => ({
            label: 'label',
            children: 'children',
            value: 'value'
        })
    },
    expandAll: {
        type: Boolean,
        default: false
    }
}

export type TreePropsType = ExtractPropTypes<typeof treeProps>