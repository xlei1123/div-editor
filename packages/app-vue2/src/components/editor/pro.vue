<template>
    <div class="aboutUs">
        <div class="content">
            <button @click="insert">插入自定义组件</button>
            <div-editor @editorInit="onEditorInit" :minHeight.prop="'600px'" :extensions.prop="vueCustomExtensions" />
            <p><b>客服QQ: </b>983171730</p>
        </div>
    </div>
</template>

<script>
import { toExtention } from 'div-editor-vue';
import Count1 from '../extensions/Count1.vue';

let editor;
export default {
    data () {
        return {
            
        };
    },

    computed: {
        vueCustomExtensions() {
            console.log('this===>', this, Count1)
            return [
                {
                    name: 'vue_comp',
                    component: Count1,
                },
                ].map((extension) => {
                return toExtention(extension, this.$createElement, Count1.render.bind(this))
            });
        }
    },

    mounted(){
    },
    methods: {
        onEditorInit(ev) {
            editor = ev.detail;
        },
        insert() {
            editor.commands.insertContent({
                type: 'vue_comp'
            })
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

    }
</style>