<script setup lang="ts">
import MtHeightTransition from '../../height-transition'
import { timePickerProps } from './prop'
import { useInnerClass } from '../use-timePicker'
import { MtInput } from '../../input'
import { useOutSideHidden } from "../../_global/hooks/use-outside-hidden";
import { useScrollItTo } from '../../_global/hooks/use-scroll'
import { CSSProperties, onMounted, ref,Ref, watch, watchEffect, computed, nextTick } from 'vue'
defineOptions({
    name: 'MtTimePicker'
})
const duration = 0.3 // 动画展开时长
const emit = defineEmits(['update:time'])
const props = defineProps(timePickerProps)
const classList = useInnerClass(props)

const showPanel = ref<boolean>(false)
const innerStyle = ref<CSSProperties>({})

// 点击当前组件显示时间面板
const clickHandler = () => {
    showPanel.value = true
}

watch(showPanel, (newValue) => {
    if (newValue) {
        // 当前展开时间面板的组件z-index置于最高
        innerStyle.value.zIndex = '11'
    } else {
        // 时间面板折叠后更新输入框的值
        const { h, m, s} = tempModel.value
        innerInput.value = `${h}:${m}:${s}`
        // 和时间面板折叠时间一致
        setTimeout(() => {
            innerStyle.value.zIndex = '10'
        }, 1000 * duration)
    }
})

const timePicker = ref<HTMLElement>()
onMounted(() => {
    // 注册点击非当前组件隐藏的事件
    useOutSideHidden(timePicker as Ref<HTMLElement>, showPanel)
})

const hours = [...Array(24).keys()].map(item => item.toString().padStart(2, '0'))
const minutes = [...Array(60).keys()].map(item => item.toString().padStart(2, '0'))
const senconds = [...Array(60).keys()].map(item => item.toString().padStart(2, '0'))

const activeHour = ref<string>('')
const activeMin = ref<string>('')
const activeSecond = ref<string>('')

const handleHourClick = (h: string) => {
    activeHour.value = h
    updateInputValueByClickActive()
}
const handleMinClick = (m: string) => {
    activeMin.value = m
    updateInputValueByClickActive()
}
const handleSecClick = (s: string) => {
    activeSecond.value = s
    updateInputValueByClickActive()
}
const getValidValue = (val:string, limit: number) => {
    if (isNaN(Number(val)) || Number(val) >= limit || val.length > 2) {
        return '00'
    }
    return val.padStart(2, '0')
}
const updateInputValueByClickActive = () => {
    if (activeHour.value && activeMin.value && activeSecond.value) {
        innerInput.value = `${activeHour.value}:${activeMin.value}:${activeSecond.value}`
    }
}
const tempModel = ref<{
    h:string,
    m:string,
    s:string
}>({
    h: '00',
    m: '00',
    s: '00'
})

//映射外部v-model:time
const innerModel = computed<string>({
    get() {
        return props.time
    },
    set(val) {
        if (/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(val)) {
            const splited = val.split(':')
            activeHour.value = splited[0]
            activeMin.value = splited[1]
            activeSecond.value = splited[2]
            tempModel.value = {
                h: activeHour.value,
                m: activeMin.value,
                s: activeSecond.value
            }
            emit('update:time', val)
        } else {
            const splited = val.split(':')
            const hourTemp = getValidValue(splited[0], 24)
            const minTemp = getValidValue(splited[1], 60)
            const secTemp = getValidValue(splited[2], 60)
            tempModel.value = {
                h: hourTemp,
                m: minTemp,
                s: secTemp
            }
        }
        // 如果更新时间的时候没有展开时间面板，值的变化应该立即反馈到输入框
        if (!showPanel.value) {
            const { h, m, s} = tempModel.value
            innerInput.value = `${h}:${m}:${s}`
            emit('update:time', innerInput.value)
        }
    }
})

const innerInput = ref<string>('')
watchEffect(() => {
    innerModel.value = `${activeHour.value}:${activeMin.value}:${activeSecond.value}`
    if (showPanel.value) {
        nextTick(() => {
            scrollToActive()
        })
    }
})

const hourRef = ref<HTMLElement>()
const minRef = ref<HTMLElement>()
const secRef = ref<HTMLElement>()
// 滚动至激活的位置
const scrollToActive = () => {
    scrollElement(hourRef, 'hour')
    scrollElement(minRef, 'min')
    scrollElement(secRef, 'sec')
}

const scrollElement = (elem:Ref<HTMLElement | undefined>, suffix: string) => {
    if (elem.value && timePicker.value) {
        const node = timePicker.value.querySelector(`.mt_timePicker__${suffix}.mt_timePicker__node--active`)
       if (!node) return
       useScrollItTo(node, 10)
    }
}
// 监听内部输入框变化
watch(innerInput, (val) => {
    innerModel.value = val
})
// 监听外部值v-model:time的变化
watch(innerModel, (val) => {
    innerModel.value = val
}, {
    "immediate": true
})
</script>

<template>
    <div :class="classList" ref="timePicker" :style="innerStyle" @mousedown="clickHandler">
        <MtInput :size="props.size || 'middle' " placeholder="请选择时间" v-model="innerInput"></MtInput>
        <MtHeightTransition :is-show="showPanel" :duration="duration" height="300px">
            <div class="mt_timePicker__panel">
                <div class="mt_timePicker__time" ref="hourRef">
                    <span
                        v-for="(item) in hours"
                        :key="item"
                        @click="handleHourClick(item)"
                        :class="[
                            'mt_timePicker__node',
                            'mt_timePicker__hour',
                            activeHour == item ? 'mt_timePicker__node--active': ''
                            ]"
                        >
                        {{ item }}
                    </span>
                </div>
                <div class="mt_timePicker__time" ref="minRef">
                    <span
                        v-for="(item) in minutes"
                        :key="item" 
                        @click="handleMinClick(item)"
                        :class="[
                            'mt_timePicker__node',
                            'mt_timePicker__min',
                            activeMin == item ? 'mt_timePicker__node--active': ''
                            ]"
                        >
                        {{ item }}
                    </span>
                </div>
                <div class="mt_timePicker__time" ref="secRef">
                    <span
                        v-for="(item) in senconds"
                        :key="item" 
                        @click="handleSecClick(item)"
                        :class="[
                            'mt_timePicker__node', 
                            'mt_timePicker__sec',
                            activeSecond == item ? 'mt_timePicker__node--active': ''
                            ]"
                        >
                        {{ item }}
                    </span>
                </div>
            </div>
        </MtHeightTransition>
    </div>
</template>
