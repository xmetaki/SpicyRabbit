<script setup lang="ts">
import { treeProps } from './prop'
import MtTreeNode from './tree-node-no-recursive.vue';
import { useInnerClass, useRenderData } from '../use-tree'
defineOptions({
    name: 'MtTree'
})
const props = defineProps(treeProps)
const classList = useInnerClass(props)
// 将不合规的树数据转化为合规的
const renderData = useRenderData(props)
</script>

<template>
    <div :class="classList">
        <MtTreeNode :data="renderData"></MtTreeNode>
    </div>
</template>
