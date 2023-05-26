<template>
  <div class="view">

    <table>
      <tr class="tit">
        <th>序号</th>
        <th>姓名</th>
        <th>语文</th>
        <th>数学</th>
      </tr>
    </table>
    <p>只列出部分数据以供预览，如想查看更多成绩，请查看成绩表格</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        queryList:[
          1,1,1
        ]
      }
    },
    methods:{

    },
    mounted(){

    }
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .view{
    padding: 50px 20px 20px;
    p{
      margin-top: 20px;
      height: 40px;
      line-height: 40px;
      background-color: #d9edf7;
    }
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