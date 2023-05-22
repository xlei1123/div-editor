<template>
  <div>
    <span class="label">composition Api 计数器组件 {{ count }}</span>
    <button @click="add">点击加1</button>

    <!-- <span class="label">选项式 Api 计数器组件 {{ num }}</span>
    <button @click="sum">点击加1</button> -->
  </div>
</template>

<script lang="ts" setup>
import { h, ref, triggerRef } from 'vue';

const count = ref(1);
const add = () => {
  count.value = count.value + 1;
  console.log(count.value);
  triggerRef(count)
}
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