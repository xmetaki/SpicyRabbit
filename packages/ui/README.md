# SpicyRabbit UI
A UI Component Library Based on Vue3 and Typescript

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