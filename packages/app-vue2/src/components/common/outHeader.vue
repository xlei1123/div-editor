<template>
    <div class="top">       
        <ul class="clearfix">
            <li class="logo"><a href="https://github.com/xlei1123/div-editor">div-editor</a></li>
            <li>文档</li>
            <li><a href="https://github.com/xlei1123/div-editor/tree/main/packages/app-react">react-demo</a></li>
            <li><a href="https://github.com/xlei1123/div-editor/tree/main/packages/app-vue">vue3-demo</a></li>
            <li><a href="https://github.com/xlei1123/div-editor/tree/main/packages/app-vue2">vue2-demo</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        login(){
            this.$router.push('/login')
        },
        getWxServicer(){
            
        },
        aboutUs(){
            this.$router.push('/aboutUs')
        },
        help(){
            this.$router.push('/help')
        }
    }
}

</script>
<style lang='less' scoped>
    .top{
      background: #1d1d1d;
    }
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
        text-align: center;
      }
    }
</style>