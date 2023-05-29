[English](./README.md) | [简体中文](./README.zh-CN.md)

A web Component editor! You can use it like using HTML native tags。

<div align="center">
<a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"/></a><a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/github/package-json/v/xlei1123/div-editor?style=plastic" alt="PRs"/></a><a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/badge/div--editor-web%20components-brightgreen" alt="PRs"/></a>
</div>

## Overview
A customizable editor for web components, where you can freely choose tags and layouts like native tags, support usage in any framework, is super simple to use, and is also convenient for subsequent refactoring and migration due to the features of native tags.


## Useage

### Vue3

#### config

**Vue3+Vite**
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

**Vue3 + webpack**
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

#### vue3

1. Registor
```js
// 入口文件 main.js 
import { ComponentLibrary } from 'div-editor-vue';
createApp(App).use(ComponentLibrary).mount('#app');
```

2. Useage in vueComponent
As with element-plus, you can use custom elements directly in components，[more](https://github.com/xlei1123/div-editor/tree/main/packages/div-editor/src/components/div-editor)

```js
// .vue组件中
<div-editor />
```

**customExtension in Vue3**
> Currently supported Vue3, it is relatively simple to use

Use and customize component registration
```vue
<script setup lang="ts">
// 引入div-editor
import { DivEditor, Editor } from 'div-editor';

// 引入自定义插件组件
import Component from './Component.vue';

// 编辑器初始化完成的回调
let editor: Editor;
const onEditorInit = (ev: any) => {
  editor = ev.detail;
}

// 定义自定义插件组件schema
const customExtensions = [
  {
    name: 'vue_comp',
    component: Component,
  },
]

// 在编辑器中插入该组件
const insert = () => {
  editor.commands.insertContent({
    type: 'vue_comp',
  });
}

</script>

<template>
  <div-editor @editorInit="onEditorInit" .extensions="customExtensions" />
  <button @click="insert">插入自定义组件</button>
</template>

```

### React


```js
import { DivEditor } from 'div-editor-react';

<DivEditor />
```



## Contribute

You are very welcome to join us in developing div-editor, if you want to contribute code, please read [here](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)

