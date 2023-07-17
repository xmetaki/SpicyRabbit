import { computed } from "vue";
import useClass from "../../_global/hooks/use-class";
import { TreeData, TreePropsType } from "../src/prop";
import { isRecordUnknownList } from "@spicyrabbit/utils/ts-helper";

export function useInnerClass (props: TreePropsType) {
    return useClass('tree', props)
}




export function useRenderData( props: TreePropsType ) {
    const { label, children, value } = props.mapped
    const rawTreeData = props.data

    const relacePropNameRecursive = (data: Record<string, unknown>[], level: number): TreeData[] => {
        const levelList: TreeData[] = []
        data.forEach(node => {
            const childInfo = node[children]
            let childrenList: TreeData[] = []
            // 类型判断
            if (isRecordUnknownList(childInfo)) {
                childrenList = relacePropNameRecursive(childInfo, level + 1)
            }
            levelList.push({
                label: String(node[label]),
                value: node[value],
                data: node,
                level,
                isShow: level == 1 ? true : props.expandAll,
                expand: props.expandAll,
                children: childrenList,
                isLeaf: childrenList.length <= 0
            })
        })
        return levelList
    }

    return computed((): TreeData[] => {
        return relacePropNameRecursive(rawTreeData, 1)
    })
}