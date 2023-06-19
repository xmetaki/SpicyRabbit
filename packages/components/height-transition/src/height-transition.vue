<script setup lang="ts">
import gsap from 'gsap'
import { heightTransitionProp } from './prop'
defineOptions({
    name: 'MtHeightTransition'
})
const props = defineProps(heightTransitionProp)

const enterHandler = (el: HTMLElement, done: gsap.Callback) => {
    gsap.fromTo(el, {
        "height": "0px",
    },
    {
        "height": "auto",
        "onComplete": done
    })
}

const leaveHandler = (el: HTMLElement, done: gsap.Callback) => {
    gsap.fromTo(el, {},
    {
        "height": "0px",
        "onComplete": done
    })
}
</script>

<template>
    <transition
        @enter="enterHandler"
        @leave="leaveHandler"
    >
        <div style="overflow:hidden" v-show="props.isShow">
            <slot></slot>
        </div>
    </transition>
</template>