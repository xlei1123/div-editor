<!--  -->
<template>
    <div>
        <div class="addLatestAc">
            <h3>{{status==0?addLatestAc:nowAc}}  <em @click="toggleAc">{{status==1?addLatestAc:nowAc}}</em></h3>
            <div class="fromContent">
                <div>
                    <span>活动名称:</span>
                    <input type="text" v-model="acTit">
                </div>
                <div>
                    <span>活动简介:</span>
                    <textarea v-model="acIntro">

                    </textarea>
                </div>
                <div>
                    <span>活动链接:</span>
                    <input type="text" v-model="acLink" placeholder="http://或者https开头">
                </div>
                <p class="tip">*可以通过易企秀等第三方平台制作，然后将链接导入</p>
                <button @click="saveAc" v-if="status==0">保存</button>
                <button @click="delAc" v-else>删除当前活动</button>
                <P class="sendTip">发送提示： 学生微信每月最多能接收2次活动，你本月还能群发 {{2-acNum>0?2-acNum:0}} 次活动，如果剩余0次群发则不会推送到学生微信但是活动始终会保存成功</P>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data () {
        return {
            nowAc:'当前的活动',
            addLatestAc:'添加最新活动',
            teacherCode:'',
            status:0,                     //标志位 标记当前的状态 添加活动
            acTit:'',
            acNum:'',
            acIntro:'',
            acLink:'',
            oldAc:''
        };
    },

    components: {},

    computed: {},

    mounted(){
        var teacherInfo = JSON.parse(sessionStorage.teacherInfo)
        this.teacherCode = teacherInfo.teacherCode;
        this.getAc()
    },

    methods: {
        toggleAc(){
            //0表示添加 1表示展示
            this.status = this.status?0:1;
            if(this.status==0){
                this.acTit = '';
                this.acIntro = '';
                this.acLink = '';
            }else{    //展示以前的活动
                this.acTit = this.oldAc.acTit;
                this.acIntro = this.oldAc.acIntro;
                this.acLink = this.oldAc.acLink;
            }
        },
        getAc(){
            this.jquery.post(this.baseUrl+"/api/getAc", {
                teacherCode:this.teacherCode
            }, (result)=>{
            if(result.isOk==true){
               this.oldAc = result.msg;
               this.acNum = result.msg.acNum;
            }else{
                // alert(result.msg)
            }
            },"json");
        },
        saveAc(){
            if(!this.acTit){
                alert('活动标题必填');
                return;
            }
            if(this.acIntro.length>2048){
                alert(最长2048个字)
                return;
            }
            if(this.acLink.trim().length && this.acLink.trim().substr(0,4)!='http'){             //链接校验
                alert('链接请以http或者https开头')
                return;
            }
            if(this.acIntro || this.acLink){
                this.jquery.post(this.baseUrl+"/api/saveAc", {
                    teacherCode:this.teacherCode,
                    acTit:this.acTit,
                    acIntro:this.acIntro,
                    acLink:this.acLink
                }, (result)=>{
                if(result.isOk==true){
                    alert('保存成功,你可以去微信公众号 点击菜单栏[最新活动]查看');
                    this.$router.go(-1)
                }else{
                    alert(result.msg)
                }
                },"json");
            }else{
                alert('简介或者链接至少填写一项')
            }

        },
        delAc(){
            if(this.oldAc){
                this.jquery.post(this.baseUrl+"/api/deleteAc", {
                    teacherCode:this.teacherCode
                }, (result)=>{
                if(result.isOk==true){
                    alert('删除成功，在微信菜单栏中将看不到活动，建议您赶快添加一个活动');
                }else{
                    alert(result.msg)
                }
                },"json");
            }else{
                alert('没有当前活动')
            }

        }
    }
}

</script>
<style lang='less' scoped>
    .addLatestAc{
        text-align: left;
        h3{
            padding: 20px 0;
            font-size: 20px;
            font-weight: bold;
            em{
                display: inline-block;
                padding: 10px;
                margin-left: 20px;
                font-style: normal;
                font-weight: normal;
                border: 1px solid #ccc;
                border-radius: 5px;
                cursor: pointer;
            }
        }
        .fromContent{
            >div{
                margin-bottom: 20px;
            }
            span{
                font-size: 14px;
                color: #606266;
            }
            input{
                -webkit-appearance: none;
                background-color: #fff;
                background-image: none;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                color: #606266;
                display: inline-block;
                font-size: 16px;
                height: 40px;
                line-height: 40px;
                outline: none;
                padding: 0 15px;
                width: 80%;
                &:focus{
                    border-color: #51d1f4;
                    outline: 0;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(81,209,244,.6);
                }
            }
            textarea{
                -webkit-appearance: none;
                background-color: #fff;
                background-image: none;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                color: #606266;
                display: inline-block;
                font-size: inherit;
                height: 300px;
                line-height: 40px;
                outline: none;
                padding: 0 15px;
                transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                width: 80%;
                vertical-align: top;
                &:focus{
                    border-color: #51d1f4;
                    outline: 0;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(81,209,244,.6);
                }
            }
            button{
                margin: 30px 0 0 60px;
                width: 80%;
                height: 40px;
                outline: none;
                border: none;
                border-radius: 10px;
                font-size: 18px;
                color: #fff;
                background-color: #51d1f4;
            }
            p.sendTip{
                margin-top: 10px;
                color: #999;
            }
        }
        .tip{
            padding-left: 70px;
            margin-top: -10px;
            height: 20px;
            line-height: 20px;
            color: #999;
        }

    }
</style>