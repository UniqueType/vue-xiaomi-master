import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
import dataService from './mockService'

let baseUrl = '' // 接口地址
let _isMock = true // 是否访问本地数据

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });
//
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

async function asyncBuildParams (params, serviceName) {
    return {};
}

function run (serviceName, params, success, fail) {
    const self = this
    console.log(`serviceName: ${serviceName}`)
    const service = dataService[serviceName]
    if (!service) {
        console.log('方法不存在')
        return
    }
    const method = service.method
    let url = service.url || ''

    if (service.isMock || _isMock) {
        url = service.mockUrl
        axios.get(url)
            .then(function (res) {
                if (success) {
                    success(res.data)
                }
            })
            .catch(function (error) {
                console.log(error)
                if (fail) {
                    fail()
                }
            })
    } else {
        asyncBuildParams(params, serviceName).then(
            v => {
                params = v
                const config = {
                    method: method,
                    url: url,
                    data: method === 'POST' || method === 'PUT' ? params : null,
                    params: method === 'GET' || method === 'DELETE' ? params : null
                }

                if (service.overUrl) {
                    config.url = service.overUrl
                } else {
                    config.baseURL = baseUrl
                }
                Indicator.open('加载中...')
                console.log('baseUrl=======' + baseUrl)
                console.log('process.env.NODE_ENV=======' + process.env.NODE_ENV)
                axios(config)
                    .then(function (res) {
                        Indicator.close()
                        console.log(`${serviceName}获取数据: ${JSON.stringify(res.data)}`)
                        if (success) {
                            success(res.data)
                        }
                    })
                    .catch(function (err) {
                        Indicator.close()
                        console.log(`err ${err}`)
                        Toast('网络或服务器异常，请稍后再试。')
                        if (fail) {
                            fail()
                        }
                    })
            },
            err => {
                console.log(`err${err}`)
                Toast('系统异常，请稍后再试。');
                if (fail) {
                    fail()
                }
            }
        )
        .catch(function(err) {
            console.log('出错：' + err) // 出错：reject
        })
    }
}
export default {
    run
}
