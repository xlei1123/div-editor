<script setup lang="ts">
import { toExtention } from 'component-library-vue';
import type { Editor } from 'component-library';
import { FontSize } from 'component-library';
import Component from '../components/Component.vue';
import ComponentSetup from '../components/Component-setup.vue';
import Composition from '../components/Composition.vue';
import { h, render, ref } from 'vue';

const vueCustomExtensions = [
  {
    name: 'vue_comp',
    component: Component,
  },
  {
    name: 'vue_comp_setup',
    component: ComponentSetup,
  },
  {
    name: 'vue_composition',
    component: Composition,
  }
].map((extension) => {
  return toExtention(extension, h, render)
});
const _extensions = [
  ...vueCustomExtensions,
  FontSize
];
let editor: Editor;
const editorInited = ref(false);
const onEditorInit = (ev: any) => {
  console.log('editor===>', ev.detail)
  editor = ev.detail;
  editorInited.value = true;
}

const insert = () => {
  editor.commands.insertContent({
    type: 'vue_comp',
  });
}


const insertComposition = () => {
  editor.commands.insertContent({
    type: 'vue_composition',
  });
}
const insertOptionSetup = () => {
  editor.commands.insertContent({
    type: 'vue_comp_setup',
  });
}

</script>

<template>
  <div class="editor-noheader">
    <div class="editor">
      <div>
        <button @click="insert">插入选项式组件</button>
        <button @click="insertOptionSetup">插入选项式setup组件</button>
        <button @click="insertComposition">插入Composition组件</button>
      </div>
      <div class="menuBar" v-if="editorInited">
        <div-menu-font-size .editor="editor" class="menuItem" />
        <div-menu-font-italic .editor="editor" class="menuItem" />
        <div-menu-font-bold .editor="editor" class="menuItem" />
      </div>
      <div-tiptap @editorInit="onEditorInit" .extensions="_extensions" aria-placeholder="请输入" />
    </div>
    <div class="des">
      你可以看到左侧是一个无头的编辑器，它不带任何的菜单项，你需要完全自主的编写菜单项，当然编辑器内容的样式你也可以自己去更改，更多请查看...
    </div>
  </div>
</template>
<style scoped>
.editor-noheader {
  display: flex;
}
div-tiptap {
  display: block;
  margin-top: 10px;
  height: 300px;
  box-shadow: 0px 0px 2px 1px #ccc;
  border-radius: 5px;
}
.editor {
  flex: 1;
  margin-right: 8px;
}
.des {
  width: 400px;
}
.menuBar {
  display: flex;
}
</style>
