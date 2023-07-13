<script setup lang="ts">
import { computed } from 'vue'
import { switchProps } from './prop'
import { useInnerClass } from '../use-switch'
defineOptions({
    name: 'MtSwitch'
})
const props = defineProps(switchProps)
const innerClassList = useInnerClass(props)
const modelValue = defineModel<boolean>({
    default: false,
    required: true,
    type: [Boolean]
})
const classList = computed(() => {
    if (!modelValue.value) {
        return innerClassList.value
    }
    return [
        ...innerClassList.value,
        'mt_switch--active'
    ]
})
const clickHandler = (e) => {
    modelValue.value = !modelValue.value
}
</script>

<template>
    <div :class="classList" @click="clickHandler">
        <div class="mt_switch__ball">
            <slot :active="modelValue"></slot>
        </div>
    </div>
</template>
