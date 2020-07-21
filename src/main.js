import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset-element.scss'
//饿了么组件
Vue.use(ElementUI);

Vue.config.productionTip = false

// 全局注册接口调用方法
import Prototype from './utils/globalPrototype'
Vue.use(Prototype)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
