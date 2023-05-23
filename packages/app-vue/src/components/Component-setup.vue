<template>
  <div>
    <h3>hello, <a target="_blank" href="https://github.com/xlei1123/div-editor">div-editor</a>. this is a custom extension</h3>
    <span class="label" @click="increment">Vue Component setup选项, 当前数值{{ count }}</span>
    <button @click="des">点击减一</button>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
export default {
  data() {
    return {
      // count: 0
    }
  },
  setup(props, ctx) {
    const count = ref(0)
    const increment = () => {
      count.value = count.value + 1;
    }
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count,
      increment
    }
  },
  methods: {
    des: function() {
      this.count = this.count - 1;
    }
  },
  mounted() {
    this.count = 100;
  }
}
</script>


<style scoped lang="css">
  h3 {
      text-align: center;
    }
    h3 a {
      font-size: 30px;
    }
</style>