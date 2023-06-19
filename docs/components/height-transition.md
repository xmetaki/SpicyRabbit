# HeightTransition

## 实例

<script setup>
import { ref } from 'vue'

const show1 = ref(true)
const changeShow = () => {
    show1.value = !show1.value
}
</script>


::: components
```vue
<MtButton @click="changeShow" type="danger">
    {{ show1 ? '关闭' : '开启' }}
</MtButton>
<MtHeightTransition :is-show="show1">
    <h1 style="margin: 10px 0px;">
        Spicy Rabbit!!!
    </h1>
</MtHeightTransition>
```
:::

## 参数

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|is-show|是否折叠|Boolean|——|true false |true|