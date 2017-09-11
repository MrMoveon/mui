
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/less/app.less'

import mui from './components'
import Dialog from '@/components/dialog'
import Toast from '@/components/toast'
Vue.use(mui)
Vue.use(Toast)
Vue.prototype.$Dialog = Dialog
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})

