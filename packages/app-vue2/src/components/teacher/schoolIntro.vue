<!-- 微信中 学校简介 -->
<template>
    <div class="schoolIntro">
        <div v-wechat-title="school" img-set="/static/img/defaultImg.png"></div>
        <h3>
            {{schoolIntro.schoolName}}
        </h3>
        <pre>
            {{schoolIntro.intro}}
        </pre>
        <p class="intoLink" v-if="schoolIntro.link">
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
            schoolIntro:''
        };
    },

    components: {},

    computed: {},

    mounted(){
        this.school = JSON.parse(sessionStorage.teacherInfo).school;
        this.getSchoolIntro()
    },

    methods: {
        getSchoolIntro(){
            this.jquery.post(this.baseUrl+"/api/getSchoolIntro", {teacherCode:JSON.parse(sessionStorage.teacherInfo).teacherCode}, (result)=>{
            if(result.isOk==true){
                this.schoolIntro = result.msg;
                if(!this.schoolIntro.intro){
                    location.href = this.schoolIntro.link
                }
            }else if(result.errCode==-1){
                alert('请重新扫码')
            }else if(result.errCode==-1000){   //系统有误
                // alert('系统有误')
            }else{      //没有简介
                this.schoolIntro = {intro:'暂无简介'}
            }
            },"json");
        },
        goLink(){
            location.href = schoolIntro.link;
        }
    }
}

</script>
<style lang='less' scoped>
    .schoolIntro{
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
            }
        }
    }
</style>