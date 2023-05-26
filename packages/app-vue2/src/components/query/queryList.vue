<template>
  <div class="queryList">
    <div v-wechat-title="school" img-set="/static/img/defaultImg.png"></div>
    <h3>{{school}}成绩查询系统</h3>
    <ul v-if="scoreList.length">
      <li v-for="(score,index) in scoreList" @click="query(index)" :key="index" v-if="score.isPublished==1">{{score.name}} ({{score.creTime |dateFormate }})</li>
    </ul>
    <p v-else>没有可查询的成绩</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        school:'',
        scoreList:[]
      }
    },
    methods:{

      getQueryList(){
        var queryObj = this.util.getQuery();
        this.jquery.post(this.baseUrl+"/api/querylist", {teacherCode:queryObj.teacherCode}, (result)=>{

          if(result.isOk==true){
            this.scoreList = result.msg.list;
            this.school = result.msg.school;
            sessionStorage.school = this.school;
          }else{
            alert(result.msg)
          }
        },"json");
      },
      query(index){
        if(this.scoreList[index].queryKey1 && this.scoreList[index].queryKey2){
          sessionStorage.queryObj = JSON.stringify({
            queryKey1:this.scoreList[index].queryKey1,
            queryKey1Tip:this.scoreList[index].queryKey1Tip?this.scoreList[index].queryKey1Tip:this.scoreList[index].queryKey1,
            queryKey2:this.scoreList[index].queryKey2,
            queryKey2Tip:this.scoreList[index].queryKey2Tip?this.scoreList[index].queryKey2Tip:this.scoreList[index].queryKey2
          })
        }else if(this.scoreList[index].queryKey1){
          sessionStorage.queryObj = JSON.stringify({
            queryKey1:this.scoreList[index].queryKey1,
            queryKey1Tip:this.scoreList[index].queryKey1Tip?this.scoreList[index].queryKey1Tip:this.scoreList[index].queryKey1
          })
        }else{
          sessionStorage.queryObj = JSON.stringify({
            queryKey2:this.scoreList[index].queryKey2,
            queryKey2Tip:this.scoreList[index].queryKey2Tip?this.scoreList[index].queryKey2Tip:this.scoreList[index].queryKey2
          })
        }
        sessionStorage.scoreName = this.scoreList[index].name
        this.$router.push({
          path:'/query',
          query:{
            scoreId:this.scoreList[index].scoreId,
            role:1
          }
        })
      }
    },
    mounted(){
      this.getQueryList();
    },
    filters: {
      dateFormate(val){
        var time = new Date(val);
        var Y = time.getFullYear();
        var mon = time.getMonth();
        var d = time.getDate();
        return `${Y}年${mon}月${d}日`
      }
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .queryList{


    h3{
      height: 80px;
      line-height:80px;
      background-color: @mainColor;
      color: #fff;
      font-size: 20px;
      letter-spacing: 2px;
    }
    ul{
      margin: 30px auto 0;
      max-width: 1000px;
      border:1px solid #f5f5f5;
      border-radius: 5px;
      li{
        // height: 40px;
        line-height: 40px;
        text-align: left;
        text-indent: 1em;
        color: @mainColor;
        border-bottom: 1px solid #f5f5f5;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
</style>