<template>
  <div>
    <span class="label" @click="increment">Vue Component setup选项, {{ count }}</span>
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


<style lang="css">

</style>