import axios from 'axios';
import store from '../store/store';

const http = axios.create({
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
})

// 拦截请求 验证token
http.interceptors.request.use(
    config => {
        // 验证
        let token = store.state.token;
        config.headers.token = token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response 拦截器
http.interceptors.response.use(response => {

    if (response.status <= 400) {
        return response
    }
  
    return Promise.reject(response)
}, error => {
    return Promise.reject(error)
})

export default http