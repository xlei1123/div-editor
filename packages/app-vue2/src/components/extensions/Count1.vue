<template>
  <div class="countWrap">
    我是计数器插件，我当前的计数为：{{ count }},
    <button @click="increment">点击加1</button>
  </div>
  
</template>
<script>
  export default{
    data(){
      return {
        count: 1
      }
    },
    methods:{
      increment() {
        this.count ++;
      }
    },
    mounted(){

    },
    render(createElement) {
      return createElement(this);
    }
  }

</script>
<style lang="less" scoped>
  .welcome{
    float: right;
    padding: 20px;
    cursor: pointer;
    p{
      font-size: 16px;
    }
  }
</style>