import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/base.css';
import router from './router';
import { ComponentLibrary } from 'component-library-vue';

createApp(App).use(ComponentLibrary).use(ElementPlus).use(router).mount('#app');



