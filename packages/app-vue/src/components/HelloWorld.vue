<script lang="ts">
export default {
  props: {
    msg: String
  },
  data() {
    return {
      count: 1
    }
  }, 
  methods: {
    change: function() {
      this.count = this.count + 1;
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <pre>
      div-editor在vue项目中的使用方式：
      1. 引入： 和element-plus一样在main.js/main.ts中
      import { ComponentLibrary } from 'component-library-vue';
      createApp(App).use(ComponentLibrary).mount('#app'); 
      2. 在页面中使用div-editor标签 是的 直接这样使用即可 一个富文本编辑器就在页面中展示出来了。
      3. 编写你自己的插件：写一个vue组件，引入并扩展它
      const vueCustomExtensions = [
        {
          name: 'vue_comp',
          component: Component,
        },
        {
          name: 'vue_comp_setup',
          component: ComponentSetup,
        },
        {
          name: 'vue_composition',
          component: Composition,
        }
      ].map((extension) => {
        return toExtention(extension, h, render)
      });
      4. 执行方法
      this.editor.insertContent
    </pre>
    当前数值：{{ count }}
    <button @click="change"> 加1</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.vue3 {
  margin-left: 10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
