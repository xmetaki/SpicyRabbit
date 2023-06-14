<template>
    <button class="mt_button mt_button__danger" :class="type">
      {{ hahaMsg }}
    </button>
</template>

<script setup lang="ts">
import { ButtonProps } from './prop'
defineOptions({
    name: 'MtButton'
})
defineProps(ButtonProps)
</script>