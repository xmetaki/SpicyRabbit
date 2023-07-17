<template>
    <div 
        class="mt_tree__node"
        v-for="(item, index) in flattenData"
        :style="{
                'transform': `translateX(${item.level * 10}px)`,
                'width': `calc(100% - ${item.level * 10}px)`
        }"
        @click="handleNodeClick(item)"
        v-show="item.isShow"
        :key="index">
            <span v-show="!item.isLeaf" :class="[
                'mt_tree__switch',
                item.expand
                ?
                'mt_tree__switch--active'
                :
                ''
            ]">
                😂
            </span>
            {{ item.label }}
        </div>
</template>

<script setup lang="ts">
import { toRef, computed, ComputedRef, reactive } from 'vue'
import { TreeData } from './prop';

defineOptions({
    "name": "MtTreeNodeNoRecursive"
})

const props = defineProps<{
    data: TreeData[]
}>()

const rawData = toRef(props, 'data')

const flattenData: ComputedRef<TreeData[]> = computed(() => {
    const innerFlatten = (data: TreeData[]) => {
        let collector:TreeData[] = []
        data.forEach( (node)  => {
            let innerCollector: TreeData[] = []
            innerCollector.push(node)
            const children = innerFlatten(node.children)
            innerCollector[0].children = children
            innerCollector = [...innerCollector, ...children]
            collector = [...collector, ...innerCollector]
        })
        return collector
    }
    return  reactive(innerFlatten(rawData.value))
})
const handleNodeClick = (node: TreeData) => {
    if (node.isLeaf) return
    node.expand = !node.expand
    const operationAll = (n: TreeData) => {
        n.children.filter(item => item.level == n.level + 1)
            .forEach(f => {
                f.isShow = n.expand
                operationAll(f)
            })
    }
    if (!node.expand) {
        node.children.forEach(item => item.isShow = false)
    } else {
        operationAll(node)
    }
}
</script>