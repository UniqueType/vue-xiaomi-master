<template>
    <div id="login">
        <header>
            <div class="xiaomi-icon">
                <span class="icon"></span>
            </div>
            <div>小米账号登录</div>
        </header>
        <div class="form">
            <div class="border_bottom_1">
                <label class="fontweight color_999" for="">+86&nbsp;&nbsp;&gt;</label>
                <input type="tel" maxlength="11" placeholder="手机号码" />
            </div>
            <div class="border_bottom_1">
                <input type="tel" maxlength="6" placeholder="短信验证码" />
                <label for="" class="vcode">获取验证码</label>
            </div>
        </div>
        <div class="btnFieldset">
            <button class="enable">立即登录/注册</button>
            <button>用户密码登录</button>
        </div>
        <div class="otherlogintype text_center">
            <div>其他方式登录</div>
            <div class="type">
                <div class="icon marginright20">
                    <img src="../../static/assets/weibo-icon.png" alt="">
                </div>
                <div class="icon">
                    <img src="../../static/assets/zhifubao-icon.png" alt="">
                </div>
            </div>
        </div>
        <footer>
            <a href="">简体&nbsp;｜&nbsp;</a>
            <a href="">繁体&nbsp;｜&nbsp;</a>
            <a href="">English&nbsp;｜&nbsp;</a>
            <a href="">常见问题&nbsp;｜&nbsp;</a>
            <a href="">隐私政策</a>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {}
    },
    created() {},
    methods: {

    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0 30px;
}
header .xiaomi-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
}
header .xiaomi-icon .icon{
    display: inline-block;
    width: 60px;
    height: 60px;
    background: url('../../static/assets/xiaomi-icon.png') no-repeat;
    background-size: cover;
}
.form{
    width: 80%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 50px;
}
.form label{
    display: inline-block;
    width: 60px;
}
.form .vcode{
    width: auto;
    padding: 0 5px;
    color: #2ea5e5;
}
.form input{
    font-size: 16px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #f60;
}
::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #f60;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #f60;
}
::-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #f60;
}
.btnFieldset {
    width: 80%;
    margin: 20px auto 0;
}
.btnFieldset button{
    width: 100%;
    font-size: 18px;
    line-height: 44px;
    border-radius: 5px;
    background-color: #eee;
    margin-top: 10px;
}
.enable{
    background-color: #f60 !important;
    color: #fff;
}
.otherlogintype {
    margin-top: 30px;
}
.otherlogintype .type {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.otherlogintype .type .icon{
    width: 30px;
    height: 30px;
}
.otherlogintype .type img{
    width: 100%;
    height: 100%;
}
footer{
    width: 100%;
    position: absolute;
    bottom: 30px;
    left: 0;
    font-size: 14px;
    text-align: center;
}

</style>
