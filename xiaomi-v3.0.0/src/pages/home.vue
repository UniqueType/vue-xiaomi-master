<template>
    <div id="home" class="home">
        <header>
            <div class="header">
                <div class="logo">
                    <span class="icon"></span>
                </div>
                <div class="search">
                    <div class="search-icon">
                        <span class="icon"></span>
                    </div>
                    <input type="text" placeholder="搜索关键词" />
                </div>
                <div class="login">
                    <span class="icon"></span>
                </div>
            </div>
            <Nav @navBarChange='navBarChange' />
        </header>
        <div></div>
        <Banner :bannerType='"0"' />
        <CellList />
        <hr>
        <div class="exposure">
            <div class="left">
                <img src="http://i8.mifile.cn/v1/a1/f79bb07f-eace-2126-0a5c-546fb7a7aaf2!358x508.webp" alt="">
            </div>
            <div class="right">
                <img src="http://i8.mifile.cn/v1/a1/145fe47f-4eb9-7419-e04c-aa0feefdd3ab!358x252.webp" alt="">
                <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fd815abaee77d453bf49d8bfe0b4d184.jpg?thumb=1&w=358&h=252" alt="">
            </div>
        </div>
        <hr>
        <Banner :bannerType='"1"' />
        <hr>
        <PhoneList />
        <div class="marintop60"></div>
    </div>
</template>
<script>
import Nav from '../components/nav.vue'
import Banner from '../components/banner.vue'
import CellList from '../components/cellList.vue'
import PhoneList from '../components/phoneList.vue'

export default {
    name: 'Home',
    components: {
        Nav,
        Banner,
        CellList,
        PhoneList
    },
    data() {
        return {}
    },
    created() {
        console.log('【home.vue】');
    },
    methods: {
        navBarChange(params) {
            console.log(params);
        }
    },
    mounted() {
    },
    activated() {
        document.body.scrollTop = 0;
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../common/css/common.css';

.home header{
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
}
.home header + div{
    width: 100%;
    padding-top: 88px;
}
.header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: #eee;
}

.search {
    width: calc(100% - 120px);
    height: 40px;
    /* margin-top: 3px; */
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

.logo,
.login {
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo .icon {
    display: inline-block;
    width: 30px;
    height: 20px;
    background: url('../../static/assets/logo.png') no-repeat;
    background-size: cover;
}

.login .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url('../../static/assets/mine1.png') no-repeat;
    background-size: cover;
}

.search-icon {
    width: 40px;
    height: 40px;
}

.search-icon .icon {
    display: inline-block;
    margin: 5px;
    width: 30px;
    height: 30px;
    background: url('../../static/assets/search.png') no-repeat;
    background-size: cover;
}

.search input {
    width: calc(100% - 40px);
}

.exposure {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.exposure .left {
    flex: 1;
    margin-right: 5px;
}

.exposure .right {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.exposure .right img:nth-of-type(1) {
    margin-bottom: 5px;
}

.exposure img {
    width: 100%;
}

</style>
