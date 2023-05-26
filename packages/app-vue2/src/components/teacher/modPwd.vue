<template>
  <div class="modPwd">
    <div class="content">
      <h3>欢迎注册学生成绩发布系统</h3>
      <div class="items">
        <div class="item">
          <span>原密码</span>
          <input type="password" name="" placeholder="请输入密码" v-model="oldPwd">
        </div>
        <div class="item">
          <span>新密码</span>
          <input type="password" name="" placeholder="请输入密码" v-model="newPwd">
        </div>
        <div class="item">
          <span>再次输入新密码</span>
          <input type="password" name="" placeholder="请再次输入密码" v-model="reNewPwd">
        </div>

      </div>
      <button @click="modPwd">修改密码</button>
    </div>
    <p class="propaganda">[榜上有名，让所有学校有自己的查分系统]</p>
  </div>
</template>
<script>
  import md5 from 'md5'
  export default{
    data(){
      return {
        teacherCode:'',
        oldPwd:'',
        newPwd:'',
        reNewPwd:''
      }
    },
    methods:{
      modPwd(){
        if(this.newPwd!=this.reNewPwd){
          alert('两次输入的密码不一致')
          return;
        }
        var oldPwd = md5(this.oldPwd)
        var newPwd = md5(this.newPwd)
        this.jquery.post(this.baseUrl+"/api/modPwd", {teacherCode:this.teacherCode,newPwd:newPwd,oldPwd:oldPwd}, (result)=>{
          if(result.isOk==true){
            alert('修改成功')
            this.$router.push('/login');
          }else{
            alert(result.msg)
          }
        },"json");
      }
    },
    mounted(){
      var teacherInfo = JSON.parse(sessionStorage.teacherInfo)
      this.teacherCode = teacherInfo.teacherCode;
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .modPwd{
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