<script setup lang="ts">
import { inputProps } from './prop'
import { useInnerClass } from '../use-input'
import { ref, watchEffect } from 'vue';
defineOptions({
    name: 'MtInput'
})
const modelValue = defineModel<string | number>({
    default: '',
    required: true,
    type: [String, Number]
})
const props = defineProps(inputProps)
const classList = useInnerClass(props)

const inputType = ref<string>('')
watchEffect(() => {
    inputType.value = props.type
})

const showPassword = ref<boolean>(false)
const handlePwdClick = () => {
    showPassword.value = !showPassword.value
    if (showPassword.value) {
        inputType.value = 'text'
    } else {
        inputType.value = 'password'
    }
}
</script>

<template>
<div :class="classList">
    <input
        :type="inputType" 
        :placeholder="placeholder" 
        v-model="modelValue"/>
    <span class="mt_input__pwd" v-if="pwdSwitch" @click="handlePwdClick">
        {{ showPassword ? '隐': '显' }}
    </span>
</div>
</template>