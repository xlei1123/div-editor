<template>
  <div class="registWrapper">
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
    <div class="regist">
      <div class="content">
        <h3>欢迎注册学生成绩发布系统</h3>
        <div class="items">
          <div class="item">
            <span>手机</span>
            <input type="number" name="" placeholder="请输入手机号" v-model="mobile">
            <i>*</i>
          </div>
          <div class="item">
            <input type="number" name="" placeholder="请输入短信验证码" v-model="sms">
            <span @click="sendSms" class="sendSms">{{sendSmsText}}</span>
            <i>*</i>
          </div>
          <div class="item">
            <span>姓名</span>
            <input type="text" name="" placeholder="请输入姓名" v-model="realname">
            <i>*</i>
          </div>
          <div class="item">
            <span>学校</span>
            <input type="text" name="" placeholder="请输入学校" v-model="school">
            <i>*</i>
          </div>
          <div class="item">
            <span>QQ</span>
            <input type="text" name="" placeholder="请输入QQ号" v-model="QQ">
          </div>
          <div class="item">
            <span>密码</span>
            <input type="password" name="" placeholder="请输入密码" v-model="pwd">
            <i>*</i>
          </div>
          <div class="item">
            <span>再次输入密码</span>
            <input type="password" name="" placeholder="请再次输入密码" v-model="repwd">
            <i>*</i>
          </div>

        </div>
        <button @click="regist">注册</button>
      </div>
    </div>
    <div v-if="wxServicer" class="wxServicer" @click.stop="closeWxServicer">
        <img :src="'./static/img/wxServicer.png'" alt="">
    </div>
  </div>
</template>
<script>
  import md5 from 'md5';
  import outHead from './common/outHeader'
  export default{
    data(){
      return {
        curTime:'',
        mobile:'',
        sms:'',
        realname:'',
        school:'',
        QQ:'',
        pwd:'',
        repwd:'',
        sendSmsText:'获取短信验证码',
        wxServicer:false
      }
    },
    components:{
      outHead
    },
    methods:{
      regist(){
        if(this.mobile.length!=11){
          alert('电话号码有误')
          return
        }
        if(this.pwd !=this.repwd){
          alert('两次输入的密码不一致')
          return
        }
        if(this.pwd && this.mobile && this.realname && this.school){
          var pwd = md5(this.pwd)
          var data = {
            mobile:this.mobile,
            pwd:pwd,
            sms:this.sms,
            realname:this.realname,
            school:this.school,
            QQ:this.QQ,
          }
          this.jquery.post(this.baseUrl+"/api/register", data, (result)=>{

            if(result.isOk==true){
              alert('注册成功')
              this.$router.push('/login')
            }else{
              alert(result.msg)
            }
          },"json");
        }else{
          alert('带*号的为必填项')
        }

      },
      sendSms(){
        if(this.sendSmsText>0){
          return;
        }
        var data = {
            mobile:this.mobile
        }
        this.jquery.post(this.baseUrl+"/api/sendSms", data, (result)=>{

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
      }
    },
    mounted(){
      this.curTime = this.util.curTime();
      setInterval(()=>{
        this.curTime = this.util.curTime();
      },1000)
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .registWrapper{
    width: 100%;
    height: 100%;
    .top{
      background: #000;
      ul{
        margin: 0px auto;
        max-width: 1200px;
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        
        .logo{
          flex: 2;
          font-size: 24px;
          text-align: left;
          text-indent: 1em;
        }
        li{
          flex: 1;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .regist{
    margin: 0 auto;
    max-width: 1000px;
    box-size: border-box;
    .content{
      padding:0 20px;
      margin: 10px auto 0;
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
      .item{
          display: flex;
          margin : 10px auto 0;
          width: 320px;
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
          i{
            position: relative;
            right: -10px;
            color: red;
            font-size: 16px;
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
  .sendSms{
    cursor: pointer;
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