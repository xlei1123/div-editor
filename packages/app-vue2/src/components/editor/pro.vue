<!--  -->
<template>
    <div class="aboutUs">
        <outHead @getWxServicer="getWxServicer"/>
        <div class="content">
            <p>
                <em>榜上有名信息服务中心</em>
                是由从事教育一线管理工作20余年的老师和知名互联网公司一线精英团队组成，自成立以来，以“让中小学校建立自己的成绩查询系统”为愿景，经过2年的调研与研发，创建了领先的成绩发布系统“榜上有名查询系统”。
            </p>
            <p>
                <em>我们承诺保护您上传的信息的隐私，绝对不会将用户数据泄露给第三方个人或者机构。同时，我们不鼓励用户上传身份证号，手机号等涉及隐私的内容。</em>
            </p>
            <p>
                我们将严格保护学校上传数据的信息的安全。使用各种安全技术和程序来保护您的信息不被未经授权的访问、使用或泄漏。用户数据在榜上有名查分系统上均加密存储，确保数据安全。榜上有名查分系统内部实行严格的权限管理，工作人员无法接触用户查询数据。
                榜上有名查分系统不会记录学生在查询时输入的学号、姓名、身份号、手机号等信息，成绩发布者也无法获取用户输入的这些信息。此信息只用于系统查询数据库使用，查询完毕即失效。
            </p>
            <p>
                榜上有名查分系统官方网站
                <a href="http://www.shanshuijituan.site">www.shanshuijituan.site</a>,您在使用榜上有名查分系统过程中遇到任何问题，欢迎与我们联系
            </p>
            <p>
                <em>免责声明</em><br>
                    就下列相关事宜的发生，本服务不承担任何法律责任：<br>

                        1.根据法律规定或相关政府的要求提供您的企业或个人信息。<br>

                        2.由于您将用户密码告知他人或与他人共享账户，导致的信息的泄漏，或其他非因服务原因导致的信息的泄漏。<br>

                        3.从非正式渠道获得的成绩查询网址或者二维码及APP进行查询造成的个人信息泄露。<br>

                        4.在各服务条款及声明中列明的使用方式或免责情形。<br>

                        5.因不可抗力导致的任何后果。<br>

                        6.因不可预测的网络劫持、入侵事件。<br>
            </p>
            <p>
                <b>客服QQ: </b>983171730
            </p>
        </div>
        <div v-if="wxServicer" class="wxServicer" @click.stop="closeWxServicer">
            <img :src="'./static/img/wxServicer.png'" alt="">
        </div>
    </div>
</template>

<script>
import outHead from '../common/outHeader'
export default {
    data () {
        return {
            wxServicer:false
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
    .aboutUs{
        width: 100%;
        height: 100%;
        text-align: left;
        .content{
            margin: 20px auto 0;
            max-width: 1000px;
            height: ~'calc(100% - 100px)';
        }
        p{
            padding: 10px;
            font-size: 18px;
            line-height: 32px;
            em{
                font-size: 20px;
                font-weight: bold;
                font-style: normal;
            }
            a{
                color: #1AAD19;
                font-size: 18px;
                text-decoration: underline;
            }
            b{
                font-size: 18px;
                font-weight: bold;
                font-style: normal;
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