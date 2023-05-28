// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp } from 'vue'
import App from './App'
import router from './router'
import { ComponentLibrary } from 'div-editor-vue';

require('!style-loader!css-loader!less-loader!./assets/common.less')
Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  // 用一个 `RegExp` 忽略所有“div-”开头的元素
  // 仅在 2.5+ 支持
  /^div-/
]
Vue.use(ComponentLibrary);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: h => h(App),
});
