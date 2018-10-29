<template>
  <div id="tabbar" class="tabbar">
    <ul class="tabbar-ul">
    	<li v-for='item in tabbar' @click='tabBarClick(item)'>
    		<div>
    			<img :src="item.active?item.activedIcon:item.icon" alt="">
    		</div>
    		<p :class="{active:item.active}">{{item.text}}</p>
    	</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tabBar',
  data() {
    return {
    	tabbar: [{
    		active: true,
    		text: '首页',
    		pageName: 'home',
    		icon: 'static/assets/home1.png',
    		activedIcon: 'static/assets/home.png'
    	}, {
    		active: false,
    		text: '分类',
    		pageName: 'category',
    		icon: 'static/assets/category1.png',
    		activedIcon: 'static/assets/category.png'
    	}, {
    		active: false,
    		text: '购物车',
    		pageName: 'cart',
    		icon: 'static/assets/cart1.png',
    		activedIcon: 'static/assets/cart.png'
    	}, {
    		active: false,
    		text: '我的',
    		pageName: 'mine',
    		icon: 'static/assets/mine1.png',
    		activedIcon: 'static/assets/mine.png'
    	}]
    }
  },
  created() {
  	// console.log(this.tabbar);
  	console.log('【tabBar.vue】');
  },
  methods: {
  	tabBarClick(item) {
  		for(let i=0;i<this.tabbar.length;i++){
  			this.tabbar[i].active = false;
  		}
  		item.active = true;
  		this.$emit('tabBarChange', item.pageName);
  	}
  }
  // props: {
  //   tabbar: {
  //     type: Array,
  //     default: []
  //   }
  // }
}

</script>
<style scoped>
.tabbar{
	width: 100%;
	height: 52px;
	position: fixed;
	bottom: 0;
  z-index: 100;
	background-color: #eee;
}
.tabbar-ul{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
	font-size: 12px;
	color: #999;
}
.tabbar-ul li{
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.tabbar-ul li div{
	width: 20px;
	height: 20px;
}
.tabbar-ul li img{
	width: 100%;
	height: 100%;
	display: block;
}
.active{
	color: #f60;
}

</style>
