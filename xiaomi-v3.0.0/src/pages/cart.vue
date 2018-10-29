<template>
    <div id="Cart">
        <div>
            <TopTitle :titleBarParams='titleBarParams' @rightBtnClick='rightBtnClick' />
            <div class="marintop50"></div>
            <div class="arrow-row">
                <div>登录后享更多优惠</div>
                <div class="right color_999" @click='goToPage("login")'>
                    <span class="f_s_14">去登录</span>
                    <div class="arrow-right">
                        <span class="icon"></span>
                    </div>
                </div>
            </div>
            <div class="goAround">
                <div class="cart-icon">
                    <span class="icon"></span>
                </div>
                <p class="color_999">购物车还是空的</p>
                <p><span class="f_s_14" @click='goToPage("home")'>去逛逛</span></p>
            </div>
            <div class="like">
                <img src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
            </div>
                <PhoneList />
                <div class="marintop60"></div>
            </div>
        </div>
</template>
<script>
import TopTitle from '../components/topTitle.vue'
import PhoneList from '../components/phoneList.vue'

export default {
    name: 'Cart',
    components: {
        TopTitle,
        PhoneList
    },
    data() {
        return {
            titleBarParams: {
                title: '购物车',
                rightBtnType: 'icon', // text || icon
                rightBtnIcon: 'static/assets/search.png',
                rightBtnText: '更多',
                rightBtnClick: 'rightBtnClick',
                curPageName: 'Cart'
            }
        }
    },
    created() {},
    methods: {
        rightBtnClick(pageName) {
            console.log(pageName);
        },
        goToPage(name) {
            if (name === 'home') {
                window.location.reload();
                // window.history.forward(-1);
                // this.$emit('setCurPage', name);
            } else {
                this.$router.push(name)
            }
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goAround {
    line-height: 50px;
    background-color: #eee;
    display: flex;
    justify-content: center;
}

.cart-icon {
    width: 30px;
    height: 30px;
    float: right;
}

.cart-icon .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    background: url('../../static/assets/cart1.png') no-repeat;
    background-size: cover;
}

.goAround .color_999+p>span {
    border: 1px solid #999;
    padding: 3px 10px;
    margin-left: 10px;
}

.like img {
    width: 100%;
}

</style>
