<template>
  <div class="publishResult">
    <p>
      恭喜！查询已生成，请把下列网址和二维码发布给学生或家长：
    </p>
    <p>
      发布方法：在学校网站或公众号增加成绩查询，将二维码发到微信群中，将二维码打印通知书下发等。
    </p>

    <p>
      电脑、QQ查询成绩请点： <a :href="alink" @click="goQueryList">{{alink}}</a>
    </p>

    <p class="wxCf">
      微信查分：将下面二维码截图分享到朋友圈或者给好友
      <br>
      <img :src="wxQrcode" alt="">
    </p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        teacherCode:'',
        alink:'',
        wxQrcode:''
      }
    },
    methods:{
      goQueryList(){

      },
      getQrcode(){
        var d = {}
        d['teacherCode'] = this.teacherCode;
        this.jquery.post(this.baseUrl+"/api/getQrcode", d, (result)=>{
          if(result.isOk==true){
            this.wxQrcode = result.qrcode
          }else{
            alert(result.msg)
          }
        },"json");
      }
    },
    mounted(){
      var teacherInfo = JSON.parse(sessionStorage.teacherInfo);
      this.teacherCode = teacherInfo.teacherCode;
      this.alink=`http://www.shanshuijituan.site/#/queryList?teacherCode=${this.teacherCode}`
      this.getQrcode();
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .publishResult{
    padding: 50px 20px 20px;
    p{
      text-align: left;
      font-size: 16px;
      line-height: 25px;
      a{
        font-size: 14px;
        color: @mainColor;
      }
    }
    p.wxCf{
      margin: 10px 0;
      font-size: 18px;
      img{
        width: 150px;
        height: 150px;
      }
    }
  }
</style>