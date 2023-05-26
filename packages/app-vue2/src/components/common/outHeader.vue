<!--  -->
<template>
    <div class="top">       
        <ul class="clearfix">
            <li class="logo" @click="login">榜上有名</li>
            <li @click="getWxServicer">微信客服</li>
            <li @click="aboutUs">
                关于我们
            </li>
            <li @click="help">
                帮助中心
            </li>
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
            this.$emit('getWxServicer')
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