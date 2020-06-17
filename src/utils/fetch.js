import axios from 'axios'


let baseUrl ='http://'+ window.location.hostname + ':2000'

// 创建axios实例
const service = axios.create({
    baseURL: baseUrl, // api的base_url
    timeout: 20000
})

// respone拦截器
service.interceptors.response.use(
    response => {

        if (response.data.statusCode == 302 || response.data.code == 302) {
            let hashUrl = window.location.pathname + window.location.hash;
            window.location.href = '/sso?redirectFrontURI=' + encodeURIComponent(hashUrl); //跳转 sso 登录，携带当前界面的url
        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    })

service.interceptors.request.use(config => {

    // config.headers['X-APP-KEY'] = 'ZUUL_WEB_KEY'  // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // config.headers["Auth"] = getCookie(tokenName), //当前cookie 用户 token
    config.headers["Content-Type"] = "application/json;charset=UTF-8"

    return config
}, error => {

    console.log(error) // for debug
    return Promise.reject(error)
})


export default service

