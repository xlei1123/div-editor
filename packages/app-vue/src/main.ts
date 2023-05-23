import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';

// src/main.js
import { ComponentLibrary } from 'component-library-vue';

createApp(App).use(ComponentLibrary).use(router).mount('#app');



