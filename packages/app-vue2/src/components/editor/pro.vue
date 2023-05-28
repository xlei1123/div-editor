<!--  -->
<template>
    <div class="aboutUs">
        <div class="content">
            <div-editor @editorInit="onEditorInit" />
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
let editor;
export default {
    data () {
        return {
            wxServicer:false
        };
    },

    computed: {},

    mounted(){},
    methods: {
        onEditorInit(ev) {
            editor = ev.detail;
        }
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