<template>
    <button :class="classList" @click="clickHandler" ref="innerButton">
      <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import {useInnerClass } from '../use-button';
import { buttonProps } from './prop'
import { useRipple } from '../../_global/hooks/use-animation';
defineOptions({
    name: 'MtButton'
})
const props = defineProps(buttonProps)
const classList = useInnerClass(props)
const innerButton = ref<HTMLElement>()
const clickHandler = (event: MouseEvent) => {
  const { ripple, rippleColor } = toRefs(props)
  if (ripple.value) {
    useRipple(event, innerButton.value!, {
      rippleColor: rippleColor?.value || 'rgba(255, 255, 255, 0.5)'
    })
  }
}
</script>