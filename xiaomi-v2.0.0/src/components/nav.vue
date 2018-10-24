<template>
  <div id="cart">
  	<div class="cart-box">
  		<span v-for='item in navbar' :class="{active:item.active}" @click='navBarClick(item)'>{{item.text}}</span>
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
    	}]
    }
  },
  created() {},
  methods: {
  	navBarClick(item) {
  		for(let i=0;i<this.navbar.length;i++){
  			this.navbar[i].active = false;
  		}
  		item.active = true;
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
}
.cart-box span{
	display: inline-block;
	margin-right: 20px;
	padding-bottom: 5px;
}
.cart-box span:last-child{
	margin-right: 60px;
}
.active{
	color: #f60;
	border-bottom: 2px solid #f60;
}
</style>
