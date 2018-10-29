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
    },
    getBanner: {
        moduleName: '',
        serviceName: '',
        serviceVersion: '',
        method: 'POST',
        initialParam: {},
        response: {},
        isMock: false,
        mockUrl: '/static/mockdata/getBanner.json',
        url: '/getBanner'
    },
    getCellList: {
        moduleName: '',
        serviceName: '',
        serviceVersion: '',
        method: 'POST',
        initialParam: {},
        response: {},
        isMock: false,
        mockUrl: '/static/mockdata/getCellList.json',
        url: '/getCellList'
    },
    getPhoneList: {
        moduleName: '',
        serviceName: '',
        serviceVersion: '',
        method: 'POST',
        initialParam: {},
        response: {},
        isMock: false,
        mockUrl: '/static/mockdata/getPhoneList.json',
        url: '/getPhoneList'
    }
}
export default mockService
