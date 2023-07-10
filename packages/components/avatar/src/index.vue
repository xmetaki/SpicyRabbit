<script setup lang="ts">
import { ref } from 'vue'
import error from './error.svg'
import { avatarProps } from './prop'
import useInnerClass, { useTextName } from '../use-avatar'
defineOptions({
    name: 'MtAvatar'
})
const image = ref<HTMLImageElement>()
const props = defineProps(avatarProps)
const classList = useInnerClass(props)
const nameRef = useTextName(props)
const handleImageLoadError = (e: Event) => {
    if (image.value) {
        image.value.src = error
        image.value.style.backgroundColor = '#fff'
        image.value.style.border = '1px solid #f0f0f0'
    }
}
</script>

<template>
    <div :class="classList">
        <img ref="image" v-if="source" :src="source" @error="handleImageLoadError"/>
        {{ nameRef }}
    </div>
</template>