<template>
  <div>
    <span class="label" @click="sum">Vue Component单文件组件, {{ count }}</span>
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


<style lang="css">

</style>