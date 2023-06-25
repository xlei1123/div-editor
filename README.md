[English](./README.md) | [简体中文](./README.zh-CN.md)

A web Component editor! You can use it like using HTML native tags。

<div align="center">
<a href="#" target="_blank"><img src="https://img.shields.io/github/package-json/v/xlei1123/div-editor?style=plastic" alt="version"/></a>
<a href="#" target="_blank"><img src="https://img.shields.io/badge/div--editor-web%20components-brightgreen" alt="web components"/></a>
<a href="https://github.com/xlei1123/div-editor/pulls" target="_blank"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"/></a>
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

```js
// 入口文件 main.js 
import { ComponentLibrary } from 'div-editor-vue';
createApp(App).use(ComponentLibrary).mount('#app');
```

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

You are very welcome to join us in developing div-editor, if you want to contribute code, please read [here](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)

