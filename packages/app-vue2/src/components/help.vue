<!--  -->
<template>
    <div class="help">
        <outHead @getWxServicer="getWxServicer"/>
        <div class="content">
            <div class="tips-content" v-for="(tip,index) in tips" :key="index">
                <div class="tip-item">
                    <div class="tip-title">
                        <i>问题：</i><p>{{tip.title}}</p>
                    </div>	
                    <div class="tip-content">
                        <i>答：</i><p>{{tip.content}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div v-if="wxServicer" class="wxServicer" @click.stop="closeWxServicer">
            <img :src="'./static/img/wxServicer.png'" alt="">
        </div>
    </div>
</template>

<script>
import outHead from './common/outHeader'
export default {
    data () {
        return {
            wxServicer:false,
            tips:[
                {
                    title:'榜上有名成绩查询系统对于老师操作方便吗？',
                    content:'老师使用起来十分方便，只需要登录榜上有名查分系统后点击新建查询，上传成绩excel表格，按照提示进行适当修改即可，最快只需一步上传表格'
                },
                {
                    title:'榜上有名成绩查询系统对于学生或者学生家长方便吗？',
                    content:'对于学生或者学生家长使用非常方便，只需要扫描或者识别老师分享的查分二维码，点击菜单栏的成绩查询即可'
                },
                {
                    title:'榜上有名成绩查询系统使用收费吗？',
                    content:'我们承诺查询成绩永久免费'
                },
                {
                    title:'除了查询成绩，还能做其他的吗？',
                    content:'为了使学校有更好的口碑，使学生更好的了解学校，老师可以编辑学校简介，学生在公众号菜单点击【学校简介】可以查看，同时为了让学生充分及时的了解学校的各种组织活动，优惠活动等等，老师可以添加活动，并且在老师每次修改活动后都会及时推送给每位学生，或者学生也可以通过公众号菜单栏【最新活动】查看'
                },
                {
                    title:'我还有一些其他问题，可以联系客服人员吗？',
                    content:'可以，请点击上方的微信客服，联系工作人员'
                }
            ]
        };
    },

    components: {
        outHead
    },

    computed: {},

    mounted(){},

    methods: {
        getWxServicer(){
            this.wxServicer=true;
        },
        closeWxServicer(){
            this.wxServicer=false;
        },
    }
}

</script>
<style lang='less' scoped>
    .help{
        width: 100%;
        height: 100%;
        .content{
            margin: 20px auto 0;
            max-width: 1000px;
            width: 100%;
            height: ~'calc(100% - 80px)';
            i{
                font-style: normal;
                font-size: 24px;
            }
            .tips-content{
                margin: 10px 20px;
                border-bottom: 1px solid #ccc;
            }
            .tip-item{
                border-bottom: 1px solid #F4F4F4;
                padding: 10px 0;
                line-height: 40px;
                
            }
            .tip-item i{
                color: #0abd15;
                margin-right: 20px;
            }
            .tip-title{
                
                display: flex;
            }
            .tip-title>p{
                font-size: 18px;
                text-align: left; 
            }
            .tip-content{
                font-size: 16px;
                padding-top: 10px;
                display: flex;
                p{
                   font-size: 16px;
                   text-align: left; 
                }
            }
        }
        .wxServicer{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            img{
            position: absolute;
            left: 50%;
            top: 50%;
            width: 300px;
            height: 400px;
            transform: translate(-50%,-50%);
            }
        }
    }
</style>