<template>
  <div class="composition">
    <h3>hello, <a target="_blank" href="https://github.com/xlei1123/div-editor">div-editor</a>. this is a custom extension</h3>
    <p class="label">这是一个composition Api 计数器组件 当前数值：<span>{{ count.value }}</span><button @click="increment" class="incrementBtn">点击加1</button></p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const count = reactive({
  value: 1
});
const increment = () => {
  count.value = count.value + 1;
}
</script>
<style scoped>
.composition {
  padding: 10px;
  box-shadow: 0px 0px 2px 1px #000;
}
h3 {
  text-align: center;
}
h3 a {
  font-size: 30px;
}
.label {
  display: inline-block;
  line-height: 40px;
}
.incrementBtn {
  margin-left: 10px;
}
</style>