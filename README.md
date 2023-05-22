[English](./README.md) | [简体中文](./README.zh-CN.md)

a web Component editor! You can use it like using HTML native tags。

<div align="center">
<a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"/></a>
</div>

## Overview
A customizable editor for web components, where you can freely choose tags and layouts like native tags, support usage in any framework, is super simple to use, and is also convenient for subsequent refactoring and migration due to the features of native tags.


## Useage

### Browser
```
```

### Vue
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

```js
// .vue组件中
import { DivEditor } from 'div-editor';

<div-editor />
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

```js
// .vue组件中
import { DivEditor } from 'div-editor';

<div-editor />
```

**Vue2**

```js
// 2.5+ 版本一下 你使用那个自定义元素 就需要将自定义元素写入下面当中.
//使 Vue 忽略在 Vue 之外的自定义元素，否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告
Vue.config.ignoredElements = [
  'div-editor'
]
```
```js
// 仅在 2.5+ 支持
Vue.config.ignoredElements = [
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  /^div-/
]
```
关于vue中使用自定义元素的更多参考： https://cn.vuejs.org/guide/extras/web-components.html

**Vue3项目中自定义插件**
> 目前支持vue3， 使用起来也比较简单

```js
// 自定义插件组件
/**
 * 自定义插件需满足以下规则
 * 1. 响应式数据不可以写到setup中
 * 2. 引入组件必须写到setup中自动注册
 */
<template>
  <div>
    <HelloWorld :msg="count + ''"></HelloWorld>
    <span class="label" @click="sum">Vue Component, {{ count }}</span>
    <button @click="des">点击减一</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    sum: function() {
      this.count = this.count + 1;
    },
    des: function() {
      this.count = this.count - 1;
    }
  },
  mounted() {
    this.count = 100;
  }
}
</script>

<script lang="ts" setup>
import HelloWorld from './HelloWorld.vue';
</script>

<style lang="css">

</style>
```

使用及自定义插件组件注册
```vue
<script setup lang="ts">
// 引入div-editor
import { DivEditor, Editor } from 'div-editor';

// 引入自定义插件组件
import Component from './Component.vue';

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
  <div-editor @editorInit="onEditorInit" :customExtensions="customExtensions" />
  <button @click="insert">插入自定义组件</button>
</template>

```

### React

## Contribute

You are very welcome to join us in developing div-editor, if you want to contribute code, please read [here](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)



# div-editor

## icon

https://remixicon.com/

example: https://tiptap.dev/examples/collaborative-editing
