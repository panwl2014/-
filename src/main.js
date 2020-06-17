import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/router';
import store from './store/store';
import axios from './axios/axios';
import echarts from 'echarts';
import 'echarts-gl';
import dataV from '@jiaminghi/data-view';

import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './js/background';
import './js/iconfont';
import 'echarts/map/js/world';
import 'echarts/map/js/china';

Vue.use(dataV)
Vue.use(ElementUi);
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
