# SpicyRabbit UI
> 充分利用monorepo优势的打包package

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