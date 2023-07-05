# SpicyRabbit UI
![logo](../../docs/public/rabbit-small.png)
> 充分利用monorepo优势的打包package


## 🚀 Install | 安装

> we recommend that you use pnpm for installation.

Use `pnpm` install

```shell
pnpm add @spicyrabbit/ui -S
```

Use `yarn` install

```shell
yarn add @spicyrabbit/ui
```

Use `npm` install

```shell
npm install @spicyrabbit/ui -S
```

## ⚡ Quick Start | 快速开始

> we used vue@3.3.4 when developing this library, Due to some breaking changes in type definition of vue, if you want have code intelligence, you should upgrade your vue version to 3.3.4.

```typescript
import { createApp } from 'vue'
import './style.css'

import Rabbit from '@spicyrabbit/ui'
import "@spicyrabbit/ui/theme/index.css"

import App from './App.vue'
createApp(App).use(Rabbit).mount('#app')
```

## ⚡ Quick experience | 快速体验

```html
<template>
    <MtButton></Mtbutton>
</template>
```

## Directory structure | 目录结构

- ui
    - vite.config.css.ts
    - vite.config.ui.ts

`vite.config.css.ts`用于整合`packages/theme`下的`scss`资源
- 输入到当前package的 `dist/theme`下

`vite.config.ui.ts`用于整合`packages/componenets`下的组件资源
- 输出声明文件到当前`package下的dist/types`目录
- 输出EsModule规范的打包文件到 `dist/es`目录
- 输出CommonJS规范的打包文件到 `dist/lib`目录
- 输出UMD规范的打包文件到 `dist/umd`目录

## Package | 打包

```shell
pnpm run build
```
