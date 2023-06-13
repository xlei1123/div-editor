# 快速开始

## vue

第一步： 安装

```sh
npm i div-editor div-editor-vue -S
```

第二步： 设定自定义标签标识

**vite中**
```js
// vite.config.ts
export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          // 将所有带div-的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('div-')
        }
      }
    }
  )]
})
```

**webpack中**
```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // 将所有带 ion- 的标签名都视为自定义元素
          isCustomElement: tag => tag.startsWith('div-')
        }
      }))
  }
}
```

第三步： 在`src/main.js`或者`main.ts`中 注册`Web components`
```js
// 入口文件 main.js 
import { ComponentLibrary } from 'div-editor-vue';
createApp(App).use(ComponentLibrary).mount('#app');
```

第四步： 在任意组件/页面中直接使用
```vue
<template>
  <div-editor />
</template>
```

## react

第一步： 安装

```sh
npm i div-editor div-editor-vue -S
```

第二部：引入自定义标签

```js
import { DivEditor, toExtention } from 'div-editor-react';
import { Editor } from 'div-editor';
```

第三步： 使用

```jsx
<DivEditor />
```