<template>
  <div class="noheader">
    <div class="menuBar" v-if="editorInited">
      <div-menu-font-size :editor.prop="editor"  />
      <div-menu-font-italic :editor.prop="editor" />
      <div-menu-font-bold :editor.prop="editor" />
    </div>
    <div-tiptap :minHeight.prop="'600px'"  @editorInit="onEditorInit" class="editorContent"></div-tiptap>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        editorInited: false,
        editor: ''
      }
    },
    methods:{
      onEditorInit(ev) {
        this.editor = ev.detail;
        this.editorInited = true;
      }
    },
    mounted(){}
  }

</script>
<style lang="less" scoped>
  @mainColor:#0fbbe9;
  .noheader{
    margin: 0 auto;
    padding: 20px;
    max-width: 547px;
    text-align: center;
    min-height: 300px;
  }
  .menuBar {
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 1px 1px #eee;
    background-color: #ddd;
  }
  div-tiptap {
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>