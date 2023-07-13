# Switch

## 实例

<script setup>
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(true)
const val3 = ref(true)
const val4 = ref(true)
const val5 = ref(true)
const val6 = ref(true)
</script>

### 不同主题

:::components
```html
<MtSwitch v-model="val1" theme="primary"/>
<MtSwitch v-model="val2" theme="danger"/>
<MtSwitch v-model="val3" theme="success"/>
<MtSwitch v-model="val4" theme="default"/>
<MtSwitch v-model="val5" theme="error"/>
<MtSwitch v-model="val6" theme="info"/>
```
:::

### 不同尺寸
:::components
```html
<MtSwitch v-model="val1" theme="primary" size="large"/>
<MtSwitch v-model="val2" theme="primary" size="middle"/>
<MtSwitch v-model="val3" theme="primary" size="small"/>
<MtSwitch v-model="val4" theme="primary" size="tiny"/>
```
:::

### 非圆角

:::components
```html
<MtSwitch :round="false" v-model="val1" theme="primary"/>
<MtSwitch :round="false" v-model="val2" theme="danger"/>
<MtSwitch :round="false" v-model="val3" theme="success"/>
<MtSwitch :round="false" v-model="val4" theme="default"/>
<MtSwitch :round="false" v-model="val5" theme="error"/>
<MtSwitch :round="false" v-model="val6" theme="info"/>
```
:::

### 文字提示

:::components
```html
<MtSwitch v-model="val1" theme="primary">
    <template v-slot:default="{ active }">
        {{active ? '开': '闭'}}
    </template>
</MtSwitch>
<MtSwitch v-model="val2" theme="primary">
    <template v-slot:default="{ active }">
        {{active ? '😆': '🙁'}}
    </template>
</MtSwitch>
```
:::

### Props

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|theme|标签主题|ThemeType|——|primary success danger warning error default info|default|
|size|标签尺寸|SizeType|large middle small tiny|middle|
|round|圆角风格|boolean|true、false|true|