<!-- 学校机构简介 -->
<template>
    <div class="schoolIntro">
        <h3>
            请输入学校名称:
        </h3>
        <input type="text" v-model="schoolName" readonly="readonly" @click.stop="schoolToast">
        <h3>
            上传学校logo或者图片
            <form>
                <input type="file" id="files" accept="image/*" @change="upImg" >
            </form>
        </h3>
        <input type="text" v-model="schoolName" readonly="readonly" @click.stop="schoolToast">
        <h3>
            请输入学校简介：
        </h3>
        <textarea v-model="intro">

        </textarea>
        <h3>
            请输入学校官网链接:
        </h3>
        <input type="text" v-model="schoolLink">
        <p class="tip">
            *如果没有官网，建议您导入微信公众号或者通过易企秀等第三方平台制作，然后将链接导入
        </p>
        <button @click="saveSchool">保存</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            teacherCode:'',
            schoolName:'',
            schoolLogo:'',
            intro:'',
            schoolLink:''
        };
    },

    components: {},

    computed: {},

    mounted(){
        var teacherInfo = JSON.parse(sessionStorage.teacherInfo)
        this.teacherCode = teacherInfo.teacherCode;
        this.schoolName = teacherInfo.school;
        this.getSchoolIntro();
    },

    methods: {
        getSchoolIntro(){
            this.jquery.post(this.baseUrl+"/api/getSchoolIntro", {
                teacherCode:this.teacherCode
            }, (result)=>{
            if(result.isOk==true){
                this.schoolName = result.msg.schoolName;
                this.intro = result.msg.intro;
                this.schoolLink = result.msg.schoolLink;
            }else{
                // alert(result.msg)
            }
            },"json");
        },
        saveSchool(){
            if(!this.schoolName){
                alert('学校名称必填')
                return;
            }
            if(this.intro.length>2048){
                alert('最长2048个字');
                return;
            }
            if(this.schoolLink.trim().length && this.schoolLink.trim().substr(0,4)!='http'){             //链接校验
                alert('链接请以http或者https开头')
                return;
            }
            if(this.intro || this.schoolLink){

                this.jquery.post(this.baseUrl+"/api/saveSchool", {
                    teacherCode:this.teacherCode,
                    schoolName:this.schoolName,
                    schoolLogo:this.schoolLogo,
                    intro:this.intro,
                    schoolLink:this.schoolLink
                }, (result)=>{
                if(result.isOk==true){
                    alert('保存成功,你可以去微信公众号 点击菜单栏[学校简介]查看');
                    this.$router.go(-1)
                }else{
                    alert(result.msg)
                }
                },"json");
            }else{
                alert('简介和链接至少填写一项')
            }
        },
        upImg(){	
            var ipt = document.getElementById('files'),
                    img = document.getElementById('preview'),
                    Orientation = null,
                    _this=this;
            var fileSrc = ipt.files[0];
            var reader = new FileReader();
            // 图片上传接口
            var formdata=new FormData();
            formdata.append("file" ,  fileSrc);
            if(fileSrc){
                this.jquery.ajax({
						url : this.baseUrl+"/api/saveSchoolLogo",
						data: formdata,		
						// dataType : "json",  //注意formdata格式上传不能设置此处
						type : "post",
						cache : false,
						processData : false,
						contentType : false,  //  不设置Content-type请求头
						success : function(json) {
                            console.log(json);
                            _this.schoolLogo = json.schoolLogoUrl;
						},
						error:function(json){
							console.log(json);
						}
					});
            }

        },
        schoolToast(){
            alert('学校名称只能在个人资料中修改')
        }
    }
}

</script>
<style lang='less' scoped>
    .schoolIntro{
        text-align: left;
        h3{
            padding-top: 20px;
            font-size: 20px;
        }
        textarea{
            box-sizing: border-box;
            margin-top: 10px;
            padding: 10px;
            width: 100%;
            height: 400px;
            border:1px solid #ccc;
            border-radius: 5px;
            text-indent: 1em;
            font-size: 16px;
            line-height: 22px;
            &:focus{
              border-color: #51d1f4;
              outline: 0;
              box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(81,209,244,.6);
            }
        }
        input{
            margin-top: 10px;
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border:1px solid #ccc;
            text-indent: 1em;
            font-size: 16px;
            line-height: 40px;
            &:focus{
              border-color: #51d1f4;
              outline: 0;
              box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(81,209,244,.6);
            }
        }
        .tip{
            margin-top: 5px;
            height: 20px;
            line-height: 20px;
            color: #999;
        }
        button{
            margin-top: 30px;
            width: 90%;
            height: 40px;
            outline: none;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            color: #fff;
            background-color: #51d1f4;
            
        }
    }
</style>