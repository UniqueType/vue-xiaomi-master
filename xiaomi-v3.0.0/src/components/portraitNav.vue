<template>
  <div id="portraitNav"  class="portraitNav">
  	<div class="portraitNav-box">
  		<span v-for='item in navbar' :class="{active: item.active}" @click='navBarClick(item, "0")'>{{item.text}}</span>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'portraitNav',
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
    	},{
        active: false,
        text: '笔记本1',
        type: '9'
      },{
        active: false,
        text: '家用电器1',
        type: '10'
      },{
        active: false,
        text: '笔记本2',
        type: '11'
      },{
        active: false,
        text: '双面屏1',
        type: '12'
      },{
        active: false,
        text: '生活用品1',
        type: '13'
      },{
        active: false,
        text: '笔记本2',
        type: '14'
      },{
        active: false,
        text: '双面屏2',
        type: '15'
      },{
        active: false,
        text: '生活用品2',
        type: '16'
      }]
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
  		this.$emit('PortraitNavBarChange', item);
  	}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portraitNav {
	width: 100%;
	font-size: 14px;
}
.portraitNav-box{
  height: auto;
  overflow-y: scroll;
}
/* 去除滚动条的小方块 不需看到具体滑到哪个位置 */
.portraitNav-box::-webkit-scrollbar{
  width: 0;
  background: transparent;
}

.portraitNav-box span{
  width: 100%;
  padding: 10px;
  display: inline-block;
  border-bottom: 1px solid #eee;
}
/* 去除滚动条的小方块 不需看到具体滑到哪个位置 */
/* .cart-box::-webkit-scrollbar{
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
} */
.active{
	color: #f60;
	border-bottom: 2px solid #f60;
}
</style>
