<template>
    <div 
        :class="['mt_tree__node']" 
        v-for="(item, index) in dataRef"
        
        :key="index">
        <div class="mt_tree__node__plain"
            :style="{
                'transform': `translateX(${item.level * 5}px)`
            }" 
        >
            {{ item.label }}
        </div>
        <MtTreeNode :data="item.children"></MtTreeNode>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { TreeData } from './prop';
defineOptions({
    name: 'MtTreeNode'
})
const props = defineProps<{data: TreeData[]}>()
const dataRef = toRef(props, "data")

</script>