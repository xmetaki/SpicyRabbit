<script setup lang="ts">
import { avatarProps } from './prop'
import useInnerClass, { useTextName } from '../use-avatar'
defineOptions({
    name: 'MtAvatar'
})
const props = defineProps(avatarProps)
const classList = useInnerClass(props)
const nameRef = useTextName(props)
</script>

<template>
    <div :class="classList">
        <img v-if="source" :src="source"/>
        {{ nameRef }}
    </div>
</template>