<script lang="ts" setup>
import MtHeightTransition from '../../height-transition'
import { stickyCardProp } from './prop'
import useStickyCard from '../use-sticky-card'
import { toRefs, ref } from 'vue';
defineOptions({
    name: 'MtStickyCard'
})
const props = defineProps(stickyCardProp)
const { autoExpand } = toRefs(props)
const isShow = ref(autoExpand.value)
const { getLabelText } = useStickyCard(props)
const labelText = getLabelText(isShow)

/**
 * 点击事件处理器
 */
const clickHandler = () => {
    isShow.value = !isShow.value
}


</script>

<template>
    <div class="mt_sticky-card">
        <div class="mt_sticky-card__content">
            <slot></slot>
        </div>
        <MtHeightTransition :is-show="isShow" :duration="0.5">
            <div v-if="$slots.source" class="mt_sticky-card__source">
                <div style="padding: 5px;">
                    <slot name="source"></slot>
                </div>
            </div>
        </MtHeightTransition>
        <div v-if="$slots.source" class="mt_sticky-card__label" @click="clickHandler">
            {{ labelText }}
        </div>
    </div>
</template>