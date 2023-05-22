<template>
  <div :key="count.value">
    <span class="label">composition Api 计数器组件 {{ count.value }}</span>
    <button @click="add">点击加1</button>
    <!-- <HelloWorld msg="div-editor" /> -->
    <!-- <span class="label">选项式 Api 计数器组件 {{ num }}</span>
    <button @click="sum">点击加1</button> -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue';
// import HelloWorld from './HelloWorld.vue';

const count = reactive({
  value: 1
});
const add = () => {
  count.value = count.value + 1;
  console.log(count.value, this);
}

watchEffect(() => {
  console.log(11111111)
})
</script>

<!-- <script lang="ts">
export default {
  data() {
    return {
      num : 1
    }
  },
  methods: {
    sum: function() {
      this.num = this.num + 1;
    }
  }
}
</script> -->