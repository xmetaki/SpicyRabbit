<script setup lang="ts">
import { ${COM_NAME}Props } from './prop'
import { useInnerClass } from '../use-${COM_NAME}'
defineOptions({
    name: 'Mt${COM_NAME_UPPERCASE}'
})
const props = defineProps(${COM_NAME}Props)
const classList = useInnerClass(props)
</script>

<template>
    <div :class="classList">
        <slot></slot>
    </div>
</template>
