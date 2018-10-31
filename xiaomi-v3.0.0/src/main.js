// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import { Http } from './utils'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.prototype.$ajax = Http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
  	window.onBack = null;
  	window.backbtnClick = () => {
  		if (window.onBack) {
  			window.onBack()
  		} else {
  			this.$router.back()
  		}
  	}
  }
})

let indexScrollTop = 0
router.beforeEach((to, from, next) => {
    /* eslint no-undef: "off" */
    window.onBack = null
    if (to.path !== '/') {
        indexScrollTop = document.body.scrollTop
    }
    next()
})

router.afterEach((route) => {
    if (route.path !== '/') {
        document.body.scrollTop = 0
    } else {
        Vue.nextTick(() => {
            document.body.scrollTop = indexScrollTop
        })
    }
})

