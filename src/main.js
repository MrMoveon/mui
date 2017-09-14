
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/less/app.less'
import mui from './components'
Vue.use(mui)

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

