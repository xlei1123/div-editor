<template>
  <div class="getPwdWrapper">
    <!-- <div class="top">
      <ul class="clearfix">
        <li class="logo">榜上有名</li>
            <li>微信客服</li>
            <li>
              关于我们
            </li>
            <li>
              帮助中心
            </li>
      </ul>
    </div> -->
    <outHead @getWxServicer="getWxServicer"/>
    <div class="getPwd">
      <div class="content">
        <h3>找回用户名和密码</h3>
        <div class="item">
          <input type="number" name="" placeholder="请输入手机号" v-model="mobile">
          <span @click="sendSms" class="sendSms">{{sendSmsText}}</span>
          <i>*</i>
        </div>
        <div class="item">
          <span>请输入短信验证码</span>
          <input type="number" name="" placeholder="请输入短信验证码" v-model="sms">
          <i>*</i>
        </div>
        <div class="item">
          <span class="newPwd">请输入新密码</span>
          <input type="password" name="" placeholder="请输入新密码" v-model="newPwd1">
          <i>*</i>
        </div>
        <div class="item">
          <span class="newPwd">请再次输入新密码</span>
          <input type="password" name="" placeholder="请再次输入新密码" v-model="newPwd2">
          <i>*</i>
        </div>
        <button @click="submit">提 交</button>
        <!-- <p>
          榜上有名查分系统现支持教师用户使用手机号登录，如果忘记用户名，您可以尝试使用注册时提交的手机号登录。学生查分问题请咨询老师。

          如果还是不行，请联系客服QQ:983171730，验证资料后将帮您找回用户名，重置密码。
        </p> -->

      </div>
    </div>
    <div v-if="wxServicer" class="wxServicer" @click.stop="closeWxServicer">
        <img :src="'./static/img/wxServicer.png'" alt="">
    </div>
  </div>
</template>
<script>
  import outHead from './common/outHeader'
  import md5 from 'md5'
  export default{
    data(){
      return {
        mobile:'',
        sms:'',
        sendSmsText:'获取短信验证码',
        newPwd1:'',
        newPwd2:'',
        wxServicer:false

      }
    },
    components:{
      outHead
    },
    methods:{
      sendSms(){
        if(this.sendSmsText>0 || !this.mobile){
          return;
        }
        if (this.mobile.length != 11) {
          alert('手机号有误，请检查')
          return;
        }
        var data = {
            mobile:this.mobile
        }
        this.jquery.post(this.baseUrl+"/api/sendSmsGetPwd", data, (result)=>{

          if(result.isOk==true){
            this.sendSmsText = 60;
            var timer = setInterval(()=>{
              this.sendSmsText --;
              if(this.sendSmsText==0){
                this.sendSmsText = '获取短信验证码';
                clearInterval(timer)
              }
            },1000)
          }else{
            alert(result.msg)
          }
        },"json");
      },
      getWxServicer(){
        this.wxServicer=true;
      },
      closeWxServicer(){
        this.wxServicer=false;
      },
      submit() {
       if (!this.mobile || this.mobile.length!=11) {
         alert('请检查手机号')
       }else if (!this.newPwd1) {
         alert('请输入新密码')
       } else if (this.newPwd1 && (this.newPwd1 != this.newPwd2)){
         alert('两次输入的密码不一致')
       }else {
         var data = {
            mobile:this.mobile,
            newPwd:md5(this.newPwd2),
            sms:this.sms
          }
          this.jquery.post(this.baseUrl+"/api/getPwd", data, (result)=>{
            if (result.isOk == true) {
              alert('密码设置成功')
              this.$router.push('/login');
            } else {
              alert(json.msg)
            }
          })
       }
        
      }
    },
    mounted(){

    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .getPwdWrapper{
    .item{
      position:relative;
      display: flex;
      justify-content:space-between;
      margin : 10px auto 0;
      width: 320px;
      align-items: center;
      border:1px solid #f5f5f5;
      border-radius: 5px;
      .sendSms{
        cursor:pointer
      }
      span{
        display: inline-block;
        padding: 0 10px;
        height:40px;
        width: 122px;
        line-height: 40px;
        font-size: 14px;
        background-color: #f5f5f5;
        text-align: justify;
        text-align-last: justify;
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
      i{
        position: absolute;
        right: -10px;
        color: red;
        font-size: 16px;
      }
    }
  }
  .getPwd{
    margin: 10px auto;
    max-width: 1000px;
    button{
      margin-top:30px;
      width:300px;
      height:40px;
      font-size:20px;
      border:none;
      border-radius:5px;
    }
    .content {
      padding: 0 10px;
      margin-top: 50px;
      h3{
        height: 40px;
        line-height: 40px;
        font-size: 18px;

      }
      p{
        font-size: 16px;
        text-align: left;
        line-height: 26px;
      }
    }
  }
  .wxServicer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    img{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 300px;
      height: 400px;
      transform: translate(-50%,-50%);
    }
  }
</style>