import axios from 'axios'

let hostName = location.hostname;
let baseUrl = ""
if (hostName == "localhost") {
    baseUrl = "http://sz.test.ztosys.com";
} else {
    baseUrl = window.location.protocol + hostName
}
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

// //返回状
// 创建axios实例
const service = axios.create({
    baseURL: '', // api的base_url
    timeout: 20000
})
// respone拦截器
service.interceptors.response.use(
    response => {
        //v2.0
        if(response.data.result != undefined){
            response.data.data = response.data.result
        }
        response.data.code = response.data.status ? 0 : -1
        // if(response.data.status === true){
        //     response.data.code = 0
        // }

        if (response.data.statusCode == '301' || response.data.code == '301') {
            console.log(response.data.message)
            return
        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    })

service.interceptors.request.use(config => {
    const {url,data} = config
    config = {
        ...config,
        url: baseUrl + url,
        data:data
    }
    return config
}, error => {
    console.log(error) // for debug
    return Promise.reject(error)
})


export default service

