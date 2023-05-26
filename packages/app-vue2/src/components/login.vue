<template>
  <div class="wrapBox">
    <div class="wrapRgb">
      <div class="login">
        <!-- <div class="top">
               
          <ul class="clearfix">
            <li class="logo">榜上有名</li>
            <li @click="getWxServicer">微信客服</li>
            <li @click="aboutUs">
              关于我们
            </li>
            <li>
              帮助中心
            </li>
          </ul>
        </div> -->
        <outHead @getWxServicer="getWxServicer"/>
        <div class="contentWrap">
          <div class="Slogan">
            <p>我们致力于</p>
            <p>帮助中小学校建立成绩查询公共服务平台</p>
          </div>
          <div class="content">
            <h3>欢迎登陆学生成绩发布系统</h3>
            <div class="mobile">
              <i></i>
              <input type="text" name="" placeholder="请输入手机号" v-model="mobile">
            </div>
            <div class="pwd">
              <i></i>
              <input type="password" name="" placeholder="请输入密码" v-model="pwd">
            </div>
            <p class="other clearfix">
              <span class="register" @click="regist">免费注册</span>
              <span class="getPwd"  @click="getPwd">忘记密码</span>
              <!-- <span class="getPwd"  @click="getWxLogin">微信登录</span> -->
            </p>
            <button @click="login">登录</button>
            <p class="studentQuery">
              <span @click="studentQuery">
                学生查分入口
              </span>

            </p>
          </div>
        </div>
        
      </div>
      <div v-if="wxServicer" class="wxServicer" @click.stop="closeWxServicer">
        <img :src="'./static/img/wxServicer.png'" alt="">
      </div>
    </div>
    <div class="footer">
        <div class="content">
            <p class="slogn">榜上有名，让查分更简单！</p>
            <p><a href="http://www.bsym.online">榜上有名信息服务中心</a>  版权所有</p>
        </div>

    </div>
  </div>
</template>
<script>
  import md5 from 'md5'
  import outHead from './common/outHeader'
  export default{
    data(){
      return {
        curTime:'',
        mobile:'',
        pwd:'',
        wxServicer:false
      }
    },
    components:{
      outHead
    },
    methods:{
      login(){
        if(this.mobile&&this.pwd){
          var mobile = this.mobile;
          var pwd = md5(this.pwd);
          this.jquery.post(this.baseUrl+"/api/login", {mobile:mobile,pwd:pwd},(result)=>{

            if(result.isOk==true){
              // alert('登录成功')
              sessionStorage.teacherInfo = JSON.stringify(result.msg);
              this.$router.push('/indexBox/index')
            }else{
              alert(result.msg)
            }
          },"json");
        }else{
          alert('请输入用户名和密码')
        }
      },
      regist(){
        this.$router.push('/regist')
      },
      getPwd(){
        this.$router.push('/getPwd')
      },
      studentQuery(){
        this.$router.push('/enterQueryCode')
      },
      getWxLogin(){  //PC端的登录需要注册微信开放平台
        // this.$router.push('/pcWxLogin')
      },
      getCurTime(){

      },
      getWxServicer(){
        this.wxServicer=true;
      },
      closeWxServicer(){
        this.wxServicer=false;
      },
    },
    mounted(){

    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .wrapBox{
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../assets/bg.jpg) no-repeat center;
    background-size: cover;
    .wrapRgb{
      height: 100%;
      background: rgba(255, 255, 255, 0.8)
    }
  }
  .login{
    margin: 0 auto;
    width: 100%;
    min-width: 320px;
    .contentWrap{
      display: flex;
      justify-content: space-between;
      >div.Slogan{
        margin-left: 10%;
        margin-top: 200px;
        text-align: center;
        p{
          text-align: left;
          font-size: 34px;
          font-weight: bold;
          color: #1d1d1d;
          line-height: 60px;
        }
        p:nth-child(2){
          padding-left: 60px;
        }
      }
      
    }
    .content{
      margin-top: 100px;
      margin-right: 15%;
      float: right;
      padding: 30px 20px;
      width: 300px;
      box-shadow: 0 0 4px #e0e3ec;
      h3{
        margin-bottom: 30px;
        text-align: center;
        font-size: 20px;
      }
      >div{
        position: relative;
        margin: 10px auto;
        width: 300px;
        input{
          width: 100%;
          height: 46px;
          outline: none;
          border: none;
          text-indent: 40px;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 16px;
          &:focus{
            border-color: #51d1f4;
            outline: 0;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(81,209,244,.6);
          }
        }
      }
      .studentQuery{
        text-align: left;
        height: 30px;
        line-height: 30px;
        span{
          color: @mainColor;
          cursor: pointer;
        }

      }
      p.other{
        margin: 20px auto;
        width: 300px;
        span{
          float: left;
          color: #0fbbe9;
          font-size: 14px;
          cursor: pointer;
          &:nth-child(2){
            float: right;
          }
        }
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
    p.propaganda{
      margin-top: 20px;
      font-size: 14px;
      color: #999;
      text-align: center;
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
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #404145;
    color: #dbdbdb;
  }
  .footer .content{
    margin: 0px auto;
    padding: 10px 0 5px;
    max-width: 1000px;
  }
  .footer .content p{
    height: 24px;
    line-height: 24px;
  }
  .footer .content p a{
    color: #0dc2b3;
  }
  .footer .content p.slogn{
    margin-bottom: 5px;
    font-size: 18px;
  }
  @media screen and (max-width: 1000px) {
      .Slogan {
          display: none;
      }
      .login .content{
        margin: 100px auto 0;
      }
  }
  
</style>