# Tag

## 实例

<script setup>
import { ref } from 'vue'

const val = ref('')
</script>

### 不同主题

:::components

```html
<MtTag theme="primary">你好</MtTag>
<MtTag theme="danger">你好</MtTag>
<MtTag theme="success">你好</MtTag>
<MtTag theme="default">你好</MtTag>
<MtTag theme="error">你好</MtTag>
<MtTag theme="info">你好</MtTag>
```
:::

### 圆角风格

:::components

```html
<MtTag round theme="primary">你好</MtTag>
<MtTag round theme="danger">你好</MtTag>
<MtTag round theme="success">你好</MtTag>
<MtTag round theme="default">你好</MtTag>
<MtTag round theme="error">你好</MtTag>
<MtTag round theme="info">你好</MtTag>
```
:::

### 朴素风格

:::components

```html
<MtTag plain theme="primary">你好</MtTag>
<MtTag plain theme="danger">你好</MtTag>
<MtTag plain theme="success">你好</MtTag>
<MtTag plain theme="default">你好</MtTag>
<MtTag plain theme="error">你好</MtTag>
<MtTag plain theme="info">你好</MtTag>
```
:::

### 简约风格

:::components

```html
<MtTag simple theme="primary">你好</MtTag>
<MtTag simple theme="danger">你好</MtTag>
<MtTag simple theme="success">你好</MtTag>
<MtTag simple theme="default">你好</MtTag>
<MtTag simple theme="error">你好</MtTag>
<MtTag simple theme="info">你好</MtTag>
```
:::

### 尺寸

:::components

```html
<MtTag size="large" theme="primary">你好</MtTag>
<MtTag size="middle" theme="primary">你好</MtTag>
<MtTag size="small" theme="primary">你好</MtTag>
<MtTag size="tiny" theme="primary">你好</MtTag>
```
:::

### Props

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|theme|标签主题|ThemeType|——|primary success danger warning error default info|default|
|size|标签尺寸|SizeType|large middle small tiny|middle|
|round|圆角风格|boolean|true、false|false|
|plain|朴素风格|boolean|true、false|false|
|simple|简约风格|boolean|true、false|false|

### Slots

|名称|说明|
|--|--|
|default|默认插槽|