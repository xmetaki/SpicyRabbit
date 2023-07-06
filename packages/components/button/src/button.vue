<template>
    <button :class="classList">
      <slot></slot>
    </button>
</template>

<script setup lang="ts">
import {useInnerClass } from '../use-button';
import { buttonProps } from './prop'
defineOptions({
    name: 'MtButton'
})
const props = defineProps(buttonProps)
const classList = useInnerClass(props)
</script>