<template>
    <button :class="classList">
      <slot></slot>
    </button>
</template>

<script setup lang="ts">
import useButton from '../use-button';
import { ButtonProps } from './prop'
defineOptions({
    name: 'MtButton'
})
const props = defineProps(ButtonProps)
const { classList } = useButton(props)
</script>