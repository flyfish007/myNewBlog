// 全局注册方法
import fetch from './fetch'

export default {
    install(Vue, options) {

        Vue.prototype.axiosPost = function (url, data) {
            return fetch({
                url: url,
                method: 'post',
                data: data || {}
            })
        }
        // data 为obj类型
        Vue.prototype.axiosGet = function (url, data) {
            let params = ''
            if ((!!data)) {
                params = Vue.prototype.setParams(data)
                url = url + '?' + params
            }
            return fetch({
                url: url,
                method: 'get',
            })
        }
        // put  --> /workflow/{state}/{code}
        Vue.prototype.axiosPut = function (url) {
            return fetch({
                url: url,
                method: 'put',
            })
        }

        Vue.prototype.setParams = function (params) { //http://stackoverflow.com/questions/22678346/convert-javascript-object-to-url-parameters/22678423
            return Object.keys(params).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
            }).join('&');
        }


    }
}
