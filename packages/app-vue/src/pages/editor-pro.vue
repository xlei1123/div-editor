<script setup lang="ts">
import { toExtention } from 'div-editor-vue';
import type { Editor } from 'div-editor';
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
 
];
let editor: Editor;

const onEditorInit = (ev: any) => {
  editor = ev.detail;
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
  <div>
    <div>
      <button @click="insert">插入选项式组件</button>
      <button @click="insertOptionSetup">插入选项式setup组件</button>
      <button @click="insertComposition">插入Composition组件</button>
    </div>
    <div-editor @editorInit="onEditorInit" .extensions="_extensions" />
  </div>
</template>
