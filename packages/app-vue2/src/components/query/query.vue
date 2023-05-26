<template>
  <div class="query">
    <div v-wechat-title="school" img-set="/static/img/defaultImg.png"></div>
    <h3>{{school}}成绩查询系统</h3>
    <h4>{{scoreName}}</h4>
    <div class="content" v-if="scoreList.length==0">
      <div v-if="queryObj.queryKey1">
        <span>{{queryObj.queryKey1Tip}}:</span><br>
        <input type="" name="" v-model="keyStr1">
      </div>
      <div v-if="queryObj.queryKey2">
        <span>{{queryObj.queryKey2Tip}}:</span><br>
        <input type="" name="" v-model="keyStr2">
      </div>
      <button @click="query">查询</button>
    </div>
    <div class="scoreResult" v-else>
        <table class="table  table-bordered s_table-bordered" v-for="(scores,index) in scoreList" :key="index">
          <tr v-for="(score,subIndex) in scoreList[index]" :key="subIndex">
            <td class="danger">{{score.name}}</td>
            <td class="warning">{{score.value}}</td>
          </tr>
        </table>
        <div class="alert alert-warning" role="alert" style="margin-top:20px;font-size:14px;">提示：查询结果全部显示完毕。对成绩有疑问请与班主任联系。</div>
        </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        school:'',
        scoreName:'',
        keyStr1:'',
        keyStr2:'',
        scoreList:[],
        queryObj:''
      }
    },
    methods:{
      query(){
        var queryObj = this.util.getQuery();
        this.scoreList = [];
        this.jquery.post(this.baseUrl+"/api/query", {
          scoreId:queryObj.scoreId,
          queryKey1:this.keyStr1,
          queryKey2:this.keyStr2,
          queryKey1Name:this.queryObj.queryKey1,
          queryKey2Name:this.queryObj.queryKey2
        }, (result) =>{

            if(result.isOk==true){
              localStorage.keyStr1 = this.keyStr1;
              localStorage.keyStr2 = this.keyStr2;
              var score = result.msg;
              for(var i=0;i<score.length;i++){
                var scoreArr = []
                for(var scoreKey in score[i]){
                  if(scoreKey!='id' && scoreKey != 'scoreId'){
                    if(score[i][scoreKey]!=null){
                      scoreArr.push({name:scoreKey,value:score[i][scoreKey]})
                    }

                  }
                }
                this.scoreList.push(scoreArr);
              }
            }else{
              alert(result.msg)
            }
         },"json");
      }
    },
    mounted(){
      this.school = sessionStorage.school;
      this.scoreName = sessionStorage.scoreName;
      this.queryObj = JSON.parse(sessionStorage.queryObj);
      this.keyStr1 = localStorage.keyStr1?localStorage.keyStr1:'';
      this.keyStr2 = localStorage.keyStr2?localStorage.keyStr2:'';
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .query{
    h3{
      height: 80px;
      line-height:80px;
      background-color: @mainColor;
      color: #fff;
      font-size: 20px;
      letter-spacing: 2px;
    }
    h4{
      margin-top: 10px;
      font-size: 16px;
    }
    .content{
      margin: 80px auto 0;
      padding: 30px 20px;
      width: 300px;
      box-shadow: 0 0 4px #e0e3ec;
      text-align: left;
      >div{
        margin-bottom: 20px;
      }
      span{
        font-size: 14px;
      }
      input{
        margin-top: 10px;
        width: 100%;
        height: 40px;
        border:1px solid #ccc;
        border-radius: 5px;
        outline: none;
        text-indent: 1em;
      }
      button{
        width: 100%;
        height: 44px;
        background-color: #0fbbe9;
        outline: none;
        border:none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .scoreResult{
      box-sizing: border-box;
      margin: 10px auto 0;
      padding: 30px 20px;
      width: 100%;
      max-width: 600px;
      box-shadow: 0 0 4px #e0e3ec;
      text-align: left;
      table{
        width: 100%;
        td{
          padding: 10px;
          font-size: 16px;
        }
      }
    }
  }
</style>