[English](./README.md) | [简体中文](./README.zh-CN.md)

一个纯原生的web components跨框架的富文本编辑器，你可以像使用div那样的原生标签一样使用它！

<div align="center">
<a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"/></a>
<a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/github/package-json/v/xlei1123/div-editor?style=plastic" alt="PRs"/></a>
<a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/badge/div--editor-web%20components-brightgreen" alt="PRs"/></a>
</div>

## Overview
一个可自定义的Web组件编辑器，可以自由选择原生标签等标签和布局，支持在主流框架Vue/React中使用，使用超级简单，并且由于原生标签的特性，也方便后续重构和迁移。

## 使用

### Vue3

#### 自定义元素的配置

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

#### vue3中使用

1. 注册
```js
// 入口文件 main.js 
import { ComponentLibrary } from 'div-editor-vue';
createApp(App).use(ComponentLibrary).mount('#app');
```

2. 组件中使用
和element-plus一样，在组件中你可以直接使用了，具体可以使用的自定义元素请看https://github.com/xlei1123/div-editor/tree/main/packages/div-editor/src/components/div-editor

```js
// .vue组件中
<div-editor />
```

关于vue中使用自定义元素的更多参考： https://cn.vuejs.org/guide/extras/web-components.html

**Vue3项目中自定义插件**
> 目前支持vue3， 使用起来也比较简单

使用及自定义插件组件注册
```vue
<script setup lang="ts">
import { toExtention } from 'div-editor-vue';
import type { Editor } from 'div-editor';

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
].map((extension) => {
  return toExtention(extension, h, render)
});

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

**customExtension in React**

```js
import React, { Component, createElement } from 'react';
import { DivEditor, toExtention } from 'div-editor-react';
import { Editor } from 'div-editor';
import TestClass from './test-class';
import Counter from './hook';
import './App.css';
import ReactDOM from 'react-dom';

interface State {
  value: number | null;
}

const customExtensions = [
  {
    name: 'react_class',
    component: TestClass,
  },
  {
    name: 'hook',
    component: Counter,
  }
].map((extension) => {
  return toExtention(extension, createElement, ReactDOM.render)
})
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: null
    };
  }
  editor: Editor|null = null;
  onEditorInit = (ev: any) => {
    this.editor = ev.detail
  }
  insertCom = () => {
    if(!this.editor) return;
    this.editor.commands.insertContent({
      type: 'react_class',
    });
    this.editor.commands.focus();
  }
  insertHook = () => {
    if(!this.editor) return;
    this.editor.commands.insertContent({
      type: 'hook',
    });
    this.editor.commands.focus();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DivEditor onEditorInit={this.onEditorInit} extensions={customExtensions} children={undefined} className={undefined}/>

          {this.state.value ? <p>Value is {this.state.value}</p> : null}
          <button onClick={this.insertCom}>插入class组件</button>
          <button onClick={this.insertHook}>插入hook组件</button>
        </header>
      </div>
    );
  }
}
export default App;
```
## Contribute

非常欢迎您加入我们一起开发div-editor，如果想要贡献代码请先阅读[这里](./CONTRIBUTING.md)。

## License

[MIT](./LICENSE)