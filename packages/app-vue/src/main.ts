import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/base.css';
import router from './router';
import { ComponentLibrary } from 'div-editor-vue';

createApp(App).use(ElementPlus).use(ComponentLibrary).use(router).mount('#app');



