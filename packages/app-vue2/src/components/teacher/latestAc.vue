<!-- 微信中 最新活动 -->
<template>
    <div class="latestAc">
        <div v-wechat-title="school" img-set="/static/img/defaultImg.png"></div>
        <h3>
            {{activity.acTit}}
        </h3>
        <pre>
            {{activity.acIntro}}
        </pre>
        <p class="intoLink" v-if="activity.acLink">
            <span @click="goLink">
                查看详情
            </span>
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            school:'',
            teacherCode:'',
            activity:''
        };
    },

    components: {},

    computed: {},

    mounted(){
        this.teacherCode = JSON.parse(sessionStorage.teacherInfo).teacherCode;
        this.school = JSON.parse(sessionStorage.teacherInfo).school;
        this.getAc()
    },

    methods: {
        getAc(){
            this.jquery.post(this.baseUrl+"/api/getAc", {teacherCode:this.teacherCode}, (result)=>{
            if(result.isOk==true){
                this.activity = result.msg;

                if(!this.activity.acIntro){
                    location.href = this.activity.link
                }
            }else if(result.errCode==-1){
                alert('请重新扫码')
            }else if(result.errCode==-1000){   //系统有误
                // alert('系统有误')
            }else{      //没有简介
                this.activity = {acIntro:'暂无活动'}
            }
            },"json");
        },
        goLink(){
            location.href = this.activity.acLink;
        }
    }
}

</script>
<style lang='less' scoped>
    .latestAc{
        padding: 0.5rem;
        box-sizing: border-box;
        width: 100%;
        h3{
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }
        pre{
            margin-top: 20px;
            font-size: 16px;
            line-height: 24px;
            white-space: pre-wrap;
            word-wrap: break-word;
            text-align: left;
        }
        .intoLink{
            text-align: left;
            span{
                font-size: 16px;
                color: #78afd3;
                cursor: pointer;
            }
        }
    }
</style>