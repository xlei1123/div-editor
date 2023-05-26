<template>
  <div class="index">
    <p>
      {{teacherInfo.realname}} 老师您好，请点击新建查询按钮建立成绩查询网页。
    </p>
    <p>下面是学校专用查分网址，永久有效。</p>
    <p>http://www.shanshuijituan.site/querylist?teacherCode={{teacherInfo.teacherCode}}</p>
    <p>您的查询编号为<b class="teacherCode"> {{teacherInfo.teacherCode}} </b></p>
    <!-- <p @click="wxLogin">微信登陆</p> -->
    <p class="wxCf">
      微信查分：将下面二维码截图分享到朋友圈或者给好友
      <br>
      <img :src="wxQrcode" alt="">
    </p>
    <ul class="clearfix">
      <li>
        <div class="newQuery" @mouseover="bigger" @click="newQuery">
          <i></i><br>
          <span>新建查询</span>
        </div>
      </li>
      <li>
        <div class="queryman" @mouseover="bigger" @click="queryman">
          <i></i><br>
          <span>查询管理</span>
        </div>
      </li>
      <li>
        <div class="MyInfo" @mouseover="bigger" @click="modMyInfo">
          <i></i><br>
          <span>个人资料</span>
        </div>
      </li>
      <li>
        <div class="modPwd" @mouseover="bigger" @click="modPwd">
          <i></i><br>
          <span>修改密码</span>
        </div>
      </li>
      <li>
        <div class="modSchool" @mouseover="bigger" @click="modSchool">
          <i></i><br>
          <span>编辑学校简介</span>
        </div>
      </li>
      <li>
        <div class="addLatestAc" @mouseover="bigger" @click="addLatestAc">
          <i></i><br>
          <span>最新活动</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        teacherInfo:{},
        wxQrcode:''
      }
    },
    methods:{
      bigger(ev){

      },
      newQuery(){
        this.$router.push('/indexBox/newQuery')
      },
      queryman(){
        this.$router.push('/indexBox/queryManagement')
      },
      modMyInfo(){
        this.$router.push('/indexBox/modMyInfo')
      },
      modPwd(){
        this.$router.push('/indexBox/modPwd')
      },
      modSchool(){
        this.$router.push('/indexBox/modSchool')
      },
      addLatestAc(){
        this.$router.push('/indexBox/addLatestAc')
      },
      getQrcode(){
        var d = {}
        d['teacherCode'] = this.teacherInfo.teacherCode;
        this.jquery.post(this.baseUrl+"/api/getQrcode", d, (result)=>{
          if(result.isOk==true){
            this.wxQrcode = result.qrcode
          }else{
            alert(result.msg)
          }
        },"json");
      },
      wxLogin(){  //测试微信登录
        var latestAc = encodeURIComponent('http://www.shanshuijituan.site/#/indexBox/latestAc');
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa6bc53990b7ca3b0&redirect_uri=${latestAc}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
      }
    },
    mounted(){
      this.teacherInfo = JSON.parse(sessionStorage.teacherInfo);
      this.getQrcode()
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .index{
    padding: 50px 20px 20px;
    p{
      text-align: left;
      font-size: 16px;
      line-height: 28px;
    }
    .teacherCode{
      font-size: 22px;
    }
    p.wxCf{
      margin-top: 10px;
      img{
        width: 150px;
        height: 150px;
      }
    }
    ul{
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      li{
        margin:20px;
        display: flex;
        align-items: center;
        div{
          width: 200px;
          height: 150px;
          background-color: #84d14f;
          text-align: center;
          cursor: pointer;
          i{
            display: inline-block;
            margin-top: 30px;
            width: 40px;
            height: 40px;
            background:url(../../../static/img/newQuery.svg) no-repeat center;
            background-size: contain;
          }
          span{
            display: inline-block;
            margin-top: 5px;
            font-size: 14px;
            color: #fff;
          }
        }
        div.queryman{
          background-color: #01b0f1;
          i{
            background:url(../../../static/img/queryMag.svg) no-repeat center;
            background-size: contain;
          }
        }
        div.MyInfo{
          background-color: #00cc65;
          i{
            background:url(../../../static/img/myInfo.svg) no-repeat center;
            background-size: contain;
          }
        }
        div.modPwd{
          background-color: #f19900;
          i{
            background:url(../../../static/img/modPwd.svg) no-repeat center;
            background-size: contain;
          }
        }
        div.modSchool{
          background-color: #FF66CC;
          i{
            background:url(../../../static/img/modSchool.svg) no-repeat center;
            background-size: contain;
          }
        }
        div.addLatestAc{
          background-color: #33CCFF;
          i{
            background:url(../../../static/img/addLatestAc.svg) no-repeat center;
            background-size: contain;
          }
        }

      }
    }
  }

</style>