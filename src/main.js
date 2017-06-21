// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mcomponent from './components/index'
import './assets/less/mui.less'

import Toast from './components/toast'

Vue.use(Toast)

Vue.config.productionTip = false
Vue.use(mcomponent);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
