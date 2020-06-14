import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/router';
import store from './store/store';
import axios from './axios/axios'

import './js/background';
import './js/iconfont';
import './js/zhejiang';
import './js/world';
import echarts from 'echarts';

Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
