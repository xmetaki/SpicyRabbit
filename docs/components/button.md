# Button

## 示例

### 按钮类型


:::components
```html
<MtButton theme="primary">主要按钮</MtButton>
<MtButton theme="success">成功按钮</MtButton>
<MtButton theme="danger">危险按钮</MtButton>
<MtButton theme="warning">警告按钮</MtButton>
<MtButton theme="error">错误按钮</MtButton>
<MtButton theme="info">信息按钮</MtButton>
<MtButton theme="default">默认按钮</MtButton>
```
:::

### 尺寸

:::components
```html
<MtButton size="large" theme="primary">主要按钮</MtButton>
<MtButton size="middle" theme="primary">主要按钮</MtButton>
<MtButton size="small" theme="primary">主要按钮</MtButton>
<MtButton size="tiny" theme="primary">主要按钮</MtButton>
```
:::

### 朴素风格

:::components
```html
<MtButton plain theme="primary">主要按钮</MtButton>
<MtButton plain theme="success">成功按钮</MtButton>
<MtButton plain theme="danger">危险按钮</MtButton>
<MtButton plain theme="warning">警告按钮</MtButton>
<MtButton plain theme="error">错误按钮</MtButton>
<MtButton plain theme="info">信息按钮</MtButton>
<MtButton plain theme="default">默认按钮</MtButton>
```
:::

### 圆角风格

:::components
```html
<MtButton round theme="primary">主要按钮</MtButton>
<MtButton round theme="success">成功按钮</MtButton>
<MtButton round theme="danger">危险按钮</MtButton>
<MtButton round theme="warning">警告按钮</MtButton>
<MtButton round theme="error">错误按钮</MtButton>
<MtButton round theme="info">信息按钮</MtButton>
<MtButton round theme="default">默认按钮</MtButton>
```
:::

### 波纹动效


:::components
```html
<MtButton ripple theme="primary">主要按钮</MtButton>
<MtButton ripple theme="success">成功按钮</MtButton>
<MtButton ripple theme="danger">危险按钮</MtButton>
<MtButton ripple theme="warning">警告按钮</MtButton>
<MtButton ripple theme="error">错误按钮</MtButton>
<MtButton ripple theme="info">信息按钮</MtButton>
<MtButton ripple theme="default">默认按钮</MtButton>
```
:::

### 波纹动效自定义颜色


:::components
```html
<MtButton ripple ripple-color="blue" theme="primary">主要按钮</MtButton>
<MtButton ripple ripple-color="green" theme="success">成功按钮</MtButton>
<MtButton ripple ripple-color="yellow" theme="danger">危险按钮</MtButton>
<MtButton ripple ripple-color="brown" theme="warning">警告按钮</MtButton>
<MtButton ripple ripple-color="red" theme="error">错误按钮</MtButton>
<MtButton ripple ripple-color="black" theme="info">信息按钮</MtButton>
<MtButton ripple ripple-color="orange" theme="default">默认按钮</MtButton>
```
:::

### Props

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|theme|按钮类型|ThemeType|——|primary success danger warning error default info|default|
|size|按钮尺寸|SizeType|large middle small tiny|middle|
|round|圆角风格|boolean|true、false|false|
|plain|朴素风格|boolean|true、false|false|
|ripple|波纹动效|boolean|true、false|false|
### Slots

|名称|说明|
|--|--|
|default|默认插槽|