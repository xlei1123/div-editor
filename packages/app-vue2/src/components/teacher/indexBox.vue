<template>

  <div class="indexBox">
    <topHead :teacherInfo="teacherInfo"></topHead>
    <div class="contentWrapper">
      <router-view @modMyInfo = "modMyInfo" class="contentBox"/>
    </div>

  </div>


</template>
<script>
  import topHead from '../common/header'
  export default{
    data(){
      return {
        teacherInfo:{
        }
      }
    },
    components:{
      topHead
    },
    methods:{
      modMyInfo(){
        var teacherInfoStr = sessionStorage.teacherInfo;
        console.log(teacherInfoStr)
          var teacherInfo = JSON.parse(teacherInfoStr);
          if(teacherInfo){
            this.teacherInfo = teacherInfo;
          }else{

          }

      }
    },
    mounted(){
      var teacherInfo = JSON.parse(sessionStorage.teacherInfo);
      if(teacherInfo && teacherInfo.teacherCode){
        this.teacherInfo = teacherInfo;
      }else{
        this.$router.push('/login')
      }

    }
  }

</script>
<style lang="less" scoped>
  .indexBox{
    width: 100%;
    height: 100%;
  }
  .contentWrapper{
    width: 100%;
    min-height:~'calc(100% - 63px)';
    background: #f5f5f5;
    .contentBox{
      margin: 0px auto;
      max-width: 1000px;
      background: #f5f5f5;
      // min-width: 600px;
    }
  }
</style>