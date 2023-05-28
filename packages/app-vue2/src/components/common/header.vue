<template>
  <div class="headerWrapper">
    <div class="header">
      <ul class="clearfix">
        <li>
          <router-link to="/editor/pro">完全编辑器</router-link>
        </li>
        <li>
          <router-link to="/editor/noheader">无头编辑器</router-link>
        </li>
        <li class="welcome">
          <p>您好，👏欢迎使用div-editor</p>
        </li>
      </ul>
    </div>
  </div>
  
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    methods:{

    },
    mounted(){

    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#01b0f1;
  .headerWrapper{
    width: 100%;
    background: #fff;
    .header{
      margin: 0px auto;
      max-width: 1000px;
      // min-width: 600px;
    }
  }
  ul{
    // padding-bottom: 10px;
    border-bottom: 1px solid #f4f4f4;
    
    li{
      float: left;
      a{
        display: inline-block;
        padding: 20px;
        font-size: 20px;
        color: #000;
        font-weight: bold;
      }
      a.router-link-active{
        color: red;
      }
    }
    .welcome{
      float: right;
      padding: 20px;
      cursor: pointer;
      p{
        font-size: 16px;

      }

    }
  }
</style>