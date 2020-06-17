import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局注册方法
import Prototype from './utils/globalPrototype'

Vue.use(Prototype)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
