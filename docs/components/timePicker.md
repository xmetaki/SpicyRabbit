# TimePicker 时间选择器

## 实例

<script setup>
import { ref } from 'vue'

const val = ref("11:10:00")
const va2 = ref("12:10:00")
const va3 = ref("12:10:00")
const va4 = ref("12:10:00")
const va5 = ref("12:10:00")
</script>

### 不同主题

:::components
```html
<MtTag>{{val}}</MtTag>
<br>
<MtTimePicker size="middle" theme="primary" v-model:time="val"/>
<MtTimePicker size="middle" theme="danger" v-model:time="val"/>
<MtTimePicker size="middle" theme="success" v-model:time="val"/>
<MtTimePicker size="middle" theme="error" v-model:time="val"/>
<MtTimePicker size="middle" theme="info" v-model:time="val"/>
<MtTimePicker size="middle" theme="warning" v-model:time="val"/>
```
:::

### 不同尺寸

:::components
```html
<MtTimePicker size="large" v-model:time="val2"/>
<br>
<MtTimePicker size="middle"  v-model:time="val3"/>
<br>
<MtTimePicker size="small" v-model:time="val4"/>
<br>
<MtTimePicker size="tiny" v-model:time="val5"/>
```
:::

### Props

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|theme|标签主题|ThemeType|——|primary success danger warning error default info|primary|
|size|标签尺寸|SizeType|large middle small tiny|middle|
|v-model:time|数据属性|String|——|——|