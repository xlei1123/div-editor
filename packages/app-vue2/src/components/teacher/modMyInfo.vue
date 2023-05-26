<template>
  <div class="modMyInfo">

    <div class="content">
      <h3>欢迎注册学生成绩发布系统</h3>
      <div class="items">
        <div class="item">
          <span>手机</span>
          <input type="text" name="" placeholder="手机号不支持修改" v-model="teacherInfo.mobile" readonly="readonly">
          <i style="font-style:normal;color:#ccc;margin-right:10px">*手机号不支持修改</i>
        </div>
        <div class="item">
          <span>姓名</span>
          <input type="text" name="" placeholder="请输入姓名" v-model="teacherInfo.realname">
        </div>
        <div class="item">
          <span>学校</span>
          <input type="text" name="" placeholder="请输入学校" v-model="teacherInfo.school">
        </div>
        <div class="item">
          <span>QQ</span>
          <input type="text" name="" placeholder="请输入QQ号" v-model="teacherInfo.QQ">
        </div>
      </div>
      <button @click="modMyInfo">修改</button>
    </div>
    <p class="propaganda">[查分宝，查分真方便]</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        curTime:'',
        oldSchoolName:'',
        teacherInfo:{}
      }
    },
    methods:{
      getMyInfo(){

      },
      modMyInfo(){
        var d = {}
        d['teacherCode'] = this.teacherInfo.teacherCode;
        d['realname'] = this.teacherInfo.realname;
        d['school'] = this.teacherInfo.school;
        d['QQ'] = this.teacherInfo.QQ;
        if(this.teacherInfo.realname&&this.teacherInfo.school){
          this.jquery.post(this.baseUrl+"/api/modMyInfo", d, (result)=>{
            if(result.isOk==true){
              
              sessionStorage.teacherInfo = JSON.stringify(result.msg);
              this.$emit('modMyInfo')
              if(this.oldSchoolName!=this.teacherInfo.school){
                alert('我们发现你修改了学校名称，建议你及时修改学校相关简介')
                this.$router.push('/indexBox/modSchool')
              }else{
                alert('修改成功')
                this.$router.push('/indexBox/index');
              }
              
            }else{
              alert(result.msg)
            }
          },"json");
        }else{
          alert('姓名和学校不能为空')
        }
      }
    },
    mounted(){
      this.teacherInfo = JSON.parse(sessionStorage.teacherInfo);
      this.oldSchoolName = this.teacherInfo.school;
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .modMyInfo{
    ul{
      li{
        float: left;
        margin-right: 20px;
        font-size: 16px;
      }
    }
    .content{
      margin: 50px auto 0;
      h3{
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        text-indent: 1em;
      }
      div.items{
        .item{
          display: flex;
          margin : 10px auto 0;
          width: 360px;
          align-items: center;
          border:1px solid #f5f5f5;
          border-radius: 5px;
          span{
            display: inline-block;
            padding: 0 10px;
            height:40px;
            line-height: 40px;
            font-size: 14px;
            background-color: #f5f5f5;
          }
          input{
            height: 40px;
            flex: 1;
            outline: none;
            border:none;
            text-indent: 1em;
            &:focus{
              border-color: #51d1f4;
              outline: 0;
              box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(81,209,244,.6);
            }
          }
        }
      }
    }

      button{
        margin-top: 20px;
        width: 100px;
        height: 44px;
        background-color: #0fbbe9;
        outline: none;
        border:none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
      }
    p.propaganda{
      margin-top: 20px;
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
</style>