<script setup lang="ts">
import { tagProps } from './prop';
import { useInnerClass } from '../use-tag'
defineOptions({
    name: 'MtTag'
})
const props = defineProps(tagProps)
const classList = useInnerClass(props)
</script>

<template>
    <div :class="classList">
        <slot></slot>
    </div>
</template>