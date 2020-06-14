import axios from 'axios';

// const http = axios.create()
axios.defaults.timeout = 120000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 拦截请求 验证token
axios.interceptors.request.use(
    config => {
        // 验证
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response 拦截器
axios.interceptors.response.use(response => {
    let data = response.data
    if (data.code === 200) {
        return data.data
    }
    if (data.code === 401) {
        alert('重新登录')
    }
    return Promise.reject(data)
}, error => {
    return Promise.reject(error)
})

export default axios