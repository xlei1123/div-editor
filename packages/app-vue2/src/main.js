// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp } from 'vue'
import App from './App'
import router from './router'
import { ComponentLibrary } from 'div-editor-vue';

require('!style-loader!css-loader!less-loader!./assets/common.less')
Vue.config.productionTip = false;

Vue.use(ComponentLibrary);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  render: h => h(App),
  components: { App }
});
