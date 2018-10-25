<template>
  <div id="cart">
  	<div :style='{visibility:showOrHide?"hidden":"visible"}' class="cart-box" ref='cart_box'>
  		<span v-for='item in navbar' :class="{active:item.active}" @click='navBarClick(item, "0")'>{{item.text}}</span>
  	</div>
    <div class="showOrHide" @click='showOrHide=!showOrHide'>
      <span :class='{"arrow-rotate0":!showOrHide, "arrow-rotate180":showOrHide}' class="icon"></span>
    </div>
    <div class="cart-list">
      <div v-if='showOrHide' class="title">全部</div>
      <div v-show='showOrHide' class="cart-list-item" :class='{"cart-list-h-0":!showOrHide,"cart-list-h-auto":showOrHide}'>
        <span v-for='item in navbar' :class="{active1:item.active}" @click='navBarClick(item, "1")'>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
    	navbar: [{
    		active: true,
    		text: '推荐',
    		type: '0'
    	},{
    		active: false,
    		text: '手机',
    		type: '1'
    	},{
    		active: false,
    		text: '智能',
    		type: '2'
    	},{
    		active: false,
    		text: '电视',
    		type: '3'
    	},{
    		active: false,
    		text: '笔记本',
    		type: '4'
    	},{
    		active: false,
    		text: '家用电器',
    		type: '5'
    	},{
    		active: false,
    		text: '新款笔记本',
    		type: '6'
    	},{
    		active: false,
    		text: '双面屏',
    		type: '7'
    	},{
    		active: false,
    		text: '生活用品',
    		type: '8'
    	}],
      showOrHide: false
    }
  },
  created() {},
  methods: {
  	navBarClick(item, type) {
      const navbar = this.navbar;
  		for(let i=0;i<navbar.length;i++){
  			this.navbar[i].active = false;
  		}
  		item.active = true;
      if (type==='1') {
        this.showOrHide = false;
      }
      // 移动选中项位置 offsetTop
      const cart_box = this.$refs.cart_box;
      const curItemObj = cart_box.getElementsByTagName('span')[item.type]
      const w = document.body.clientWidth/2 - 40;
      if (curItemObj.offsetLeft > w) {
        cart_box.scrollTo(curItemObj.offsetLeft - w, 0);
      } else {
        cart_box.scrollTo(0, 0);
      }
  		this.$emit('navBarChange', item);
  	}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart {
	width: 100%;
	padding-top: 10px;
	background-color: #eee;
	font-size: 14px;
}
.cart-box{
	width: auto;
	overflow-x: scroll;
	white-space: nowrap;
	padding: 0 20px;
  border-bottom: 2px solid #eee;

}
/* 去除滚动条的小方块 不需看到具体滑到哪个位置 */
.cart-box::-webkit-scrollbar{
  height: 0;
  background: transparent;
}
.cart-box span{
	display: inline-block;
	margin-right: 20px;
	padding-bottom: 5px;
}
.cart-box span:last-child{
	margin-right: 50px;
}
.active{
	color: #f60;
	border-bottom: 2px solid #f60;
}
.cart-list{
  width: 100%;
  padding: 0 0 0 20px;
  background-color: #eee;
  position: absolute;
  top: 50px;
  right: 0;
  padding-bottom: 10px;
}
.cart-list .title{
  height: 40px;
  line-height: 40px;
  color: #000;
  font-size: 16px;
}
.showOrHide{
  width: 60px;
  height: 42px;
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 2;
  text-align: center;
  background-color: #eee;
}
.showOrHide .icon{
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-top: 12px;
  background: url('../../static/assets/arrow.png') no-repeat;
  background-size: cover;
  /* transform: rotate(0deg); */
  transition: transform 0.2s linear;
}
.arrow-rotate0{
  transform: rotate(0deg);
}
.arrow-rotate180{
  transform: rotate(180deg);
}
.active1{
  color: #f60;
  border: 1rpx solid #f60 !important;
}
.cart-list-item{
  width: 100%;
}
.cart-list-item span{
  float: left;
  padding: 3px 15px;
  border-radius: 5px;
  background-color: #fff;
  border: 1rpx solid #999;
  margin: 3px 10px;
}
</style>
