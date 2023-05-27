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
    </div>
    <div class="firstStep" v-if="firstStep">
      <h3>第二步：设置查询名称</h3>
      <p>
        <span>本次查询名称：</span>
        <input type="text" name="" placeholder="例如：2017-2018学年度第一学期第一次月考" v-model="scoreName">
      </p>
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
      downloadExemple(){
        location.href = './static/exemple.xls'
      },
      nextSec(){
        // if(this.scoreName){

        // }
      },
      nextLasted(){

      },
    },
    mounted(){}
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