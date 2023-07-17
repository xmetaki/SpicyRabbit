<script setup lang="ts">
import gsap from 'gsap'
import { heightTransitionProp } from './prop'
const DEFAULT_DURATION = 1
const DEFAULT_HEIGHT = 'auto'
defineOptions({
    name: 'MtHeightTransition'
})
const props = defineProps(heightTransitionProp)

const enterHandler = (el: HTMLElement, done: gsap.Callback) => {
    const duration = props.duration ? props.duration : DEFAULT_DURATION
    const height = props.height ? props.height : DEFAULT_HEIGHT
    gsap.fromTo(el, {
        "height": "0px",
    },
    {
        height,
        duration,
        "onComplete": done
    })
}

const leaveHandler = (el: HTMLElement, done: gsap.Callback) => {
    const duration = props.duration ? props.duration : DEFAULT_DURATION
    gsap.fromTo(el, {},
    {
        duration,
        "height": "0px",
        "onComplete": done
    })
}
</script>

<template>
    <transition
        v-show="true"
        @enter="enterHandler"
        @leave="leaveHandler"
    >
        <template v-if="props.isShow">
            <slot></slot>
        </template>
    </transition>
</template>