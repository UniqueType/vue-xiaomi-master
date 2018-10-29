<template>
    <div id="mine">
        <header @click='goToPage("login")'>
            <div class="user">
                <span class="icon"></span>
            </div>
            <div>
                登录/注册
            </div>
        </header>
        <div class="arrow-row border_bottom_1" @click='goToPage("login")'>
            <div>我的订单</div>
            <div class="right color_999">
                <span class="f_s_14">全部订单</span>
                <div class="arrow-right">
                    <span class="icon"></span>
                </div>
            </div>
        </div>
        <ul class="ordertype">
            <li v-for='(item,index) in orderTypeList' :key='index'>
                <div class="order-icon">
                    <img :src="item.icon">
                </div>
                <div class="f_s_14">{{item.name}}</div>
            </li>
        </ul>
        <hr>
        <MineList />
    </div>
</template>
<script>
// import '../common/css/common.css'
import MineList from '../components/mineList.vue';

export default {
    name: 'Mine',
    components: {
        MineList
    },
    data() {
        return {
            orderTypeList: [{
                type: '0',
                name: '待付款',
                icon: 'static/assets/dfk-icon.png'
            },{
                type: '1',
                name: '待收货',
                icon: 'static/assets/dsh-icon.png'
            },{
                type: '2',
                name: '待换修',
                icon: 'static/assets/dhx-icon.png'
            }]
        }
    },
    created() {},
    methods: {
        goToPage(pageName) {
            this.$router.push(pageName);
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../common/css/common.css';

header {
    width: 100%;
    background-color: #f37d0f;
    display: flex;
    align-items: center;
    padding: 20px;
    color: #fff;
    background: url('../../static/assets/mine-head.png') no-repeat center 0 #f37d0f;
    background-size: auto 100%;
}

header .user {
    width: 50px;
    height: 50px;
    margin-right: 20px;
}

header .user .icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url('../../static/assets/user-default-head.png') no-repeat;
    background-size: cover;

}
.ordertype {
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 10px 0;
}
.ordertype li{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ordertype .order-icon{
    width: 30px;
    height: 30px;
}
.ordertype img{
    width: 100%;
}
</style>
