let mockService = {
    queryGoodsInfo: { // 查询商品信息
        moduleName: '',
        serviceName: '',
        serviceVersion: '',
        method: 'POST',
        initialParam: {},
        response: {},
        isMock: false,
        mockUrl: '/static/mockdata/queryGoodsInfo.json',
        url: '/queryGoodsInfo'
    },
    queryUserInfo: { // 查询用户信息
        moduleName: '',
        serviceName: '',
        serviceVersion: '',
        method: 'POST',
        initialParam: {},
        response: {},
        isMock: false,
        mockUrl: '/static/mockdata/queryUserInfo.json',
        url: '/queryUserInfo'
    },
    userLoginOrRegister: { // 用户注册或登录
        moduleName: '',
        serviceName: '',
        serviceVersion: '',
        method: 'POST',
        initialParam: {},
        response: {},
        isMock: false,
        mockUrl: '/static/mockdata/userLoginOrRegister.json',
        url: '/userLoginOrRegister'
    }
}
export default mockService
