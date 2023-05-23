<template>
  <div>
    <h3>hello, <a target="_blank" href="https://github.com/xlei1123/div-editor">div-editor</a>. this is a custom extension</h3>
    <span class="label" @click="sum">Vue Component单文件组件, 当前数值：{{ count }}</span>
    <button @click="des">点击减一</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    sum: function() {
      this.count = this.count + 1;
      console.log(this.count, this)
    },
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