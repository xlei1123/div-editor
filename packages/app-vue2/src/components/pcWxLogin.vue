<template>
  <div id="wxLogin">

  </div>
</template>
<script>
  import md5 from 'md5'
  export default{
    data(){
      return {

      }
    },
    methods:{
      wxLogin(){
        var REDIRECT_URI = encodeURIComponent('http://www.shanshuijituan.site/#/indexBox/index');
        var obj = new WxLogin({

          id:"wxLogin",    //div的id

          appid: "wxc8d09d62a88f6c7c",

          scope: "snsapi_login",

          redirect_uri: REDIRECT_URI,        //回调地址

          state: "",　　　　　　　　　//参数，可带可不带

          style: "",　　　　　　　　　//样式  提供"black"、"white"可选，默认为黑色文字描述

          href: ""                 //自定义样式链接，第三方可根据实际需求覆盖默认样式。

        });
      }
    },
    mounted(){
      this.wxLogin();
    }
  }

</script>
<style lang="less" scoped>

</style>