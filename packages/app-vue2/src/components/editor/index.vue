<template>
  <div class="indexBox">
    <div id="mout-point"></div>
    <!-- <p class="welcome">👏，这里是vue2中使用div-editor的两种方式，完全编辑器是带菜单栏的编辑器，你可以直接引入使用(当然你一样可以扩展)，另一种是无头编辑器，你可以引入div-editor中的菜单，同时可以扩展你自己的需要的插件</p>
    <topHead :teacherInfo="teacherInfo"></topHead>
    <div class="contentWrapper">
      <router-view class="contentBox"/>
    </div> -->
  </div>
</template>
<script>
  import topHead from '../common/header'
  export default{
    data(){
      return {
        teacherInfo:{
        }
      }
    },
    components:{
      topHead
    },
    mounted() {
      var Profile = Vue.extend({
            template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
            data: function () {
                return {
                firstName: 'Walter',
                lastName: 'White',
                alias: 'Heisenberg'
                }
            }
            })
            // 创建 Profile 实例，并挂载到一个元素上。
            new Profile().$mount('#mount-point')
    },
    methods:{
      
    },
  }

</script>
<style lang="less" scoped>
  .indexBox{
    width: 100%;
    height: 100%;
  }
  .welcome {
    padding: 10px;
  }
  .contentWrapper{
    width: 100%;
    min-height:~'calc(100% - 63px)';
    background: #f5f5f5;
    .contentBox{
      margin: 0px auto;
      max-width: 1000px;
      background: #f5f5f5;
      // min-width: 600px;
    }
  }
</style>