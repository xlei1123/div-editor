// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'

import util from './util'
Vue.use(require('vue-wechat-title'))

require('!style-loader!css-loader!less-loader!./assets/common.less')
Vue.config.productionTip = false;
Vue.prototype.util = util;
Vue.prototype.jquery = jquery
// 线上接口地址
Vue.prototype.baseUrl = `http://60.205.213.247:3000`
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  render: (h) => h(App),
  components: { App }
})
