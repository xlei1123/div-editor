<template>
  <div class="queryManagement">
    <table v-if="queryList.length>0">
      <tr class="tit">
        <th>查询名称</th>
        <th>状态</th>
        <th>生成时间</th>
        <th>操作</th>
      </tr>
      <tr :class="{single:index%2==1}" v-for="(query,index) in queryList">
        <th>{{query.name}}</th>
        <th>{{query.isPublished=="1"?'接受查询':'暂停查询'}}</th>
        <th>{{query.creTime}}</th>
        <th class="action">
          <!-- <span class="view" @click="view(index)">浏览</span> -->
          <!-- <span class="mod" @click="mod(index)">修改</span> -->
          <span class="stop" @click="toggleStop(index)">{{query.isPublished=="1"?'暂停':'允许'}}</span>
          <span class="delete" @click="del(index)">删除</span>
        </th>
      </tr>
    </table>
    <p v-else>
      您还没有上传过成绩
    </p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        teacherInfo:'',
        queryList:[]
      }
    },
    methods:{
      view(index){
        this.$router.push('/indexBox/view')
      },
      getQueryList(){

        this.jquery.post(this.baseUrl+"/api/querylist", {teacherCode:this.teacherInfo.teacherCode}, (result)=>{
          if(result.isOk==true){
            this.queryList = result.msg.list;
            console.log(this.queryList)
          }else{
            alert(result.msg)
          }
        },"json");
      },
      mod(index){
        this.$router.push({path:'/indexBox/newQuery',query:{scoreId:this.queryList[index].scoreId}})
      },
      toggleStop(index){       //停止查询
        this.jquery.post(this.baseUrl+"/api/toggleStop", {teacherCode:this.teacherInfo.teacherCode,scoreId:this.queryList[index].scoreId}, (result)=>{
          if(result.isOk==true){
            this.queryList[index].isPublished = !this.queryList[index].isPublished;
          }else{
            alert(result.msg)
          }
        },"json");
      },
      del(index){    //删除查询
         this.jquery.post(this.baseUrl+"/api/delQuery", {teacherCode:this.teacherInfo.teacherCode,scoreId:this.queryList[index].scoreId}, (result)=>{
          if(result.isOk==true){
            this.queryList.splice(index,1);
          }else{
            alert(result.msg)
          }
        },"json");
      }
    },
    mounted(){
      this.teacherInfo =JSON.parse(sessionStorage.teacherInfo);
      this.getQueryList();
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .queryManagement{
    padding: 50px 20px 20px;
    table{
      width: 100%;
      border:1px solid #f4f4f4;
      tr.tit{
        background-color: #fff;
        th{
          color: #000;
        }
      }
      tr{

        th{
          padding: 10px;
          border:1px solid #f5f5f5;

        }
        th.action{
          width: 250px;
          span{
            display: inline-block;
            padding: 6px 10px;
            margin-right: 10px;
            color: #fff;
            background-color: @mainColor;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
      // tr.single{
      //   background-color: #84d14f;
      // }

    }
  }
</style>