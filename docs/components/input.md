# Input

## 实例

<script setup>
import { ref } from 'vue'

const val = ref('欸你看见我啦！')
</script>

### 不同尺寸
::: components
```html
<MtInput 
    placeholder="测试字体大小"
    size="tiny">
</MtInput>
<br/>
<MtInput 
    placeholder="测试字体大小"
    size="small" />
<br/>
<MtInput 
    placeholder="测试字体大小"
    size="middle" />
<br/>
<MtInput
    placeholder="测试字体大小"
    size="large" />

```
:::

### 密码输入框类型

::: components
```html
<MtInput type="password" />
```
:::

### 显隐密码

::: components
```html
<MtInput type="password" :pwdSwitch="true" v-model="val"/>
```
:::

### Props

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|type|输入框类型|string|—— |"text"|
|size|输入框尺寸|string|large、middle、small、tiny |"middle"|
|placeholder|输入占位|string|—— |""|
|pwdSwitch|显隐密码|boolean|—— |false|

### Slots

|名称|说明|
|--|--|
|default|默认插槽|