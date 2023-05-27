// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import util from './util'

require('!style-loader!css-loader!less-loader!./assets/common.less')
Vue.config.productionTip = false;
Vue.prototype.util = util;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  render: h => h(App),
  components: { App }
})
