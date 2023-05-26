<template>
  <div class="newQuery">
    <div class="secondStep" v-if="secondStep">
      <h3>第一步：上传成绩excel</h3>
      <p>{{secondStepTip}} <a href="javascript:;" @click="downloadExemple">点击下载演示Excel成绩表</a></p>
      <div class="excelJpg">

      </div>
      <div class="upExcel" v-if="!onLoading">
        {{secondStepBtnTip}}
        <input type="file" name="file" multiple="multiple" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" @change="upFile">
        <!-- 成绩单上传加载动画 -->

      </div>
      <loading v-else/>
      <!-- <button @click="nextLasted">下一步</button> -->
    </div>
    <div class="firstStep" v-if="firstStep">
      <h3>第二步：设置查询名称</h3>
      <p>
        <span>本次查询名称：</span>
        <input type="text" name="" placeholder="例如：2017-2018学年度第一学期第一次月考" v-model="scoreName">
      </p>
      <!-- <button @click="nextSec">下一步</button> -->
    </div>

    <div class="lastedStep" v-if="lastedStep">
      <h3>第三步：设置查询条件</h3>
      <p>请选择查询登录页需要输入的内容</p>
      <div class="getScoreKey" v-if="queryKey1">
        <label>
          <input type="checkbox" name="" checked="checked"  v-model="isQueryKey1">
          <span>{{queryKey1}}</span>
        </label>
        <h4>提示标题</h4>
        <input type="text" name="" :placeholder="'请输入'+queryKey1" v-model="queryKey1Tip" class="tip">
      </div>
      <div class="getScoreKey" v-if="queryKey2">
        <label>
          <input type="checkbox" name="" checked="checked"  v-model="isQueryKey2">
          <span>{{queryKey2}}</span>
        </label>
        <h4>提示标题</h4>
        <input type="text" name="" :placeholder="'请输入'+queryKey2" v-model="queryKey2Tip" class="tip">
      </div>
      <button @click="modQuery" v-if="$route.query.scoreId">提交修改</button>
      <button @click="over" v-else>提交</button>
      <!-- <div class="getScoreKey">
        <label>
          <input type="checkbox" name="" checked="checked">
          <span>学号</span>
        </label>
        <h4>查询登录页提示文字：</h4>
        <input type="text" name="" placeholder="请输入学号" class="tip">
      </div>
      <div class="getScoreKey">
        <label>
          <input type="checkbox" name="" checked="checked">
          <span>学号</span>
        </label>
        <h4>查询结果页提示文字：</h4>
        <input type="text" name="" placeholder="请输入学号" class="tip">
      </div> -->
    </div>

  </div>
</template>
<script>
  import loading from '../common/loading'
  export default{
    data(){
      return {
        teacherCode:'',
        excelJpg:'../../../static/img/demo_excel',
        firstStep:true,
        onLoading:false,
        secondStep:true,
        lastedStep:true,
        scoreName:'',
        excelUrl:'',
        excelname:'',
        secondStepTip:'还未上传成绩，请上传！！！',
        secondStepBtnTip:'点击上传成绩单',
        isQueryKey1:true,
        isQueryKey2:true,
        queryKey1:'',
        queryKey1Tip:'',
        queryKey2:'',
        queryKey2Tip:''
      }
    },
    components:{
      loading
    },
    methods:{
      getQueryInfo(){                //修改
        this.jquery.ajax({
            url:this.baseUrl+ "/api/queryInfo",
              type: "POST",
              dataType: "json",
              data: {teacherCode:this.teacherInfo.teacherCode,scoreId:this.$route.query.scoreId},
              error: function(data){},
              success: (result) =>{
                if(result.isOk==true){
                  var result = result.msg;
                  this.secondStepBtnTip = '重新上传'
                  this.scoreName = result.name;
                  this.queryKey1 = result.queryKey1;
                  this.queryKey1 = result.queryKey1Tip;
                  if(!this.queryKey1){
                    this.isQueryKey1 = false;
                  }
                  this.queryKey2 = result.queryKey2;
                  this.queryKey2Tip = result.queryKey2Tip;
                  if(!this.queryKey2){
                    this.isQueryKey2 = false;
                  }
                  this.secondStepTip = result.excelname;
                  this.excelname = result.excelname;
                  this.excelUrl = result.excelUrl;
              }else{
                alert(result.msg);
            }
            }
        });
      },
      downloadExemple(){
        location.href = './static/exemple.xls'
      },
      nextSec(){
        // if(this.scoreName){

        // }
      },
      nextLasted(){

      },
      upFile(e){
        this.onLoading = true;
        this.secondStepBtnTip = '成绩上传中...'
        var file = e.target.files[0]
        var formdata=new FormData( );
        formdata.append("file" ,  file);//获取文件法二
        this.jquery.ajax({
          url : this.baseUrl+'/api/file-upload',
          data: formdata,
          // dataType : "json",  //注意formdata格式上传不能设置此处
          type : "post",
          cache : false,
          processData : false,
          contentType : false,  //  不设置Content-type请求头
          success : (json) =>{
            this.onLoading = false;
            if(json.isOk==true){
              this.scoreName = file.name.substring(0,file.name.lastIndexOf('.'));
              this.secondStepBtnTip = '重新上传'
              this.excelUrl = json.excelUrl;
              this.secondStepTip = file.name;
              this.excelname = file.name;
              // 获取头两个字段 这前面的两个字段一般用于查询条件
              this.queryKey1 = json.ziduan[0];
              this.queryKey2 = json.ziduan[1]
            }
          },
          error:function(json){
            this.onLoading = false;
            alert(json);
          }
        });
      },
      over(){
        if(this.scoreName && this.excelUrl && (this.isQueryKey1 || this.isQueryKey2)){
          // 上传后台
          var d = {};
          d['teacherCode']=this.teacherInfo.teacherCode;
          d['excelUrl'] = this.excelUrl;
          d['scoreName'] = this.scoreName;
          d['excelname'] = this.excelname;
          if(this.isQueryKey1){   //查询条件一
            d['queryKey1'] = this.queryKey1;
            d['queryKey1Tip'] = this.queryKey1Tip?this.queryKey1Tip:this.queryKey1
          }
          if(this.isQueryKey2){   //查询条件二
            d['queryKey2'] = this.queryKey2;
            d['queryKey2Tip'] = this.queryKey2Tip?this.queryKey2Tip:this.queryKey2;
          }
          this.jquery.ajax({
              url:this.baseUrl+ "/api/publish",
                type: "POST",
                async: false,      //ajax同步
                dataType: "json",
                data: d,
                error: function(data){},
                success: (result) =>{
                  if(result.isOk==true){
                    alert('发布成功')
                    this.$router.push('/indexBox/publishResult')
                }else{
                  alert(result.msg);
              }
              }
          });

        }else if(!this.scoreName){
          alert('请设置查询名称')
        }else if(!this.excelUrl){
          alert('请上传成绩单')
        }else{
          alert('请设置查询条件')
        }
      },
      modQuery(){
        if(this.scoreName && this.excelUrl && (this.isQueryKey1 || this.isQueryKey2)){
          // 上传后台
          var d = {};
          d['teacherCode']=this.teacherInfo.teacherCode;
          d['scoreId']=this.$route.query.scoreId;
          d['excelUrl'] = this.excelUrl;
          d['scoreName'] = this.scoreName;
          d['excelname'] = this.excelname;
          if(this.isQueryKey1){   //查询条件一
            d['queryKey1'] = this.queryKey1;
            d['queryKey1Tip'] = this.queryKey1Tip?this.queryKey1Tip:this.queryKey1
          }
          if(this.isQueryKey2){   //查询条件二
            d['queryKey2'] = this.queryKey2;
            d['queryKey2Tip'] = this.queryKey2Tip?this.queryKey2Tip:this.queryKey2;
          }
          this.jquery.ajax({
              url:this.baseUrl+ "/api/modQuery",
                type: "POST",
                async: false,      //ajax同步
                dataType: "json",
                data: d,
                error: function(data){},
                success: (result) =>{
                  if(result.isOk==true){
                    alert('修改成功')
                    this.$router.push('/indexBox/publishResult')
                }else{
                  alert(result.msg);
              }
              }
          });

        }else if(!this.scoreName){
          alert('请设置查询名称')
        }else if(!this.excelUrl){
          alert('请上传成绩单')
        }else{
          alert('请设置查询条件')
        }
      }
    },
    mounted(){
      this.teacherInfo = JSON.parse(sessionStorage.teacherInfo);
      if(this.$route.query.scoreId){                //表明是在修改
        this.getQueryInfo()
      }
    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .newQuery{
    margin: 0 auto;
    padding: 20px;
    max-width: 547px;
    text-align: center;
    div{
      padding: 20px 0;
      h3 {
        margin-bottom: 20px;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f5f5f5;
        text-align: left;
      }

    }
    div.firstStep{
      p{
        margin-top: 20px;
        span{
          font-size: 14px;
          font-weight: bold;
        }
        input {
          margin-left: 30px;
          width: 280px;
          height: 35px;
          border-radius: 5px;
          outline: none;
          border:1px solid #ccc;
          text-indent: 1em;
        }
      }
    }
    div.secondStep{
      p{
        padding: 10px 20px;
        height: 30px;
        line-height: 30px;
        background-color: #d9edf7;
        border-color: #bce8f1;
        color: red;
        font-size: 18px;
        a{
          color: #6d9dd1;
          font-size: 14px;
        }
      }
      .excelJpg{
        max-width: 547px;
        height: 98px;
        background: url(../../../static/img/demo_excel.jpg) no-repeat center;
        background-size: contain;
      }
      .upExcel{
        position: relative;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        padding: 0;
        background-color: @mainColor;
        border-radius: 5px;
        input{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
      }
    }
    div.lastedStep{
      background: #f5f5f5;
      p{
        padding: 10px 20px;
        height: 30px;
        line-height: 30px;
        background-color: #d9edf7;
        border-color: #bce8f1;
        color: @mainColor;
        font-size: 16px;
        text-align: left;
      }
      .getScoreKey{
        text-align: left;
        h4{
          font-size: 14px;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
        }

        input.tip{
          height: 40px;
          line-height: 40px;
          width: 100%;
          text-indent: 1em;
          border-radius: 5px;
          outline: none;
          border:1px solid @mainColor;
        }


      }
    }
    button{
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