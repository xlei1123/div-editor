<template>
  <div class="queryList">
    <h3>榜上有名成绩查询系统</h3>
    <div class="content">
      <h4>请输入查询编号</h4>
      <input type="text" name="" v-model="teacherCode">
    </div>

    <button class="query" @click="query">查询</button>
    <p>如不知道查询编号，请联系老师</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        teacherCode:'',
      }
    },
    methods:{

      getQueryList(){
        var data = {
          teacherCode:this.teacherCode
        }
        if(sessionStorage.openId){
          data.openId = sessionStorage.openId
        }
        this.jquery.post(this.baseUrl+"/api/querylist", data, (result)=>{

          if(result.isOk==true){
            this.scoreList = result.msg.list;
            sessionStorage.teacherInfo = JSON.stringify({teacherCode:this.teacherCode})

            if(sessionStorage.toLinkStr){
              this.$router.push({
                path:'/'+sessionStorage.toLinkStr,
                query:{
                  teacherCode:this.teacherCode,
                  role:1
                }
              })
            }else{
              this.$router.push({
                path:'/queryList',
                query:{
                  teacherCode:this.teacherCode,
                  role:1
                }
              })
            }
            
          }else{
            alert(result.msg)
          }
        },"json");
      },
      query(){
        this.getQueryList();
      }
    },
    mounted(){

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
    div.content{
      padding: 0.5rem 1rem;
      margin: 10px auto;
      max-width: 1000px;
      min-width: 320px;
      h4{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: left;
      }
      input{
        box-sizing: border-box;
        width:100%;
        height: 40px;
        border-radius: 5px;
        outline: none;
        border:1px solid @mainColor;
        text-indent: 1em;
      }

    }
    .query{
        margin: 30px 0px;
        width: 100px;
        height: 40px;
        outline: none;
        border:none;
        border-radius: 5px;
        background-color: @mainColor;
        color: #fff;
      }
  }
</style>