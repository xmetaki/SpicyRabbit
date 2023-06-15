# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'

import Rabbit from '@spicyrabbit/ui'
import "@spicyrabbit/ui/theme/index.css"


createApp(App).use(Rabbit).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入
import { MtButton } from '@spicyrabbit/ui'

// 样式按需引入
import '@spicyrabbit/ui/theme/button.css'

createApp(App).use(MtButton).mount('#app')
```

## 使用 UMD

可通过 `UMD` 模式在 `*.html` 中引入 `@spicyrabbit/ui`，快速构建您的程序

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@spicyrabbit/ui/dist/index.css"
  />
</head>
```
