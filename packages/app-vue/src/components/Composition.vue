<template>
  <div :key="count.value">
    <span class="label">composition Api 计数器组件 {{ count.value }}</span>
    <button @click="increment">点击加1</button>
    <HelloWorld msg="div-editor" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import HelloWorld from './HelloWorld.vue';

const count = reactive({
  value: 1
});
const increment = () => {
  count.value = count.value + 1;
}
</script>