<template>
  <div id="index">
  <tabBar @tabBarChange='tabBarChange' />
  <div class="pagebox">
    <Home v-if='currentPage=="home"' />
    <Category v-else-if='currentPage=="category"' />
    <Cart v-else-if='currentPage=="cart"' />
    <Mine v-else />
  </div>
  </div>
</template>

<script>
import tabBar from '../components/tabBar'
import Home from './home'
import Category from './category'
import Cart from './cart'
import Mine from './login'

export default {
  name: 'Index',
  components: {
  	tabBar,
  	Home,
  	Category,
  	Cart,
  	Mine
  },
  data () {
  	return {
  		currentPage: 'home'
  	}
  },
  created () {
  	console.log('【index.vue】');
  },
  methods:{
  	tabBarChange(page) {
  		this.currentPage = page;
  	}
  },
  mounted() {
    this.$ajax.run('queryGoodsInfo', {}, r => {
        // console.log('queryGoodsInfo==='+ r);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../common/css/reset.css';
.pagebox{
	width: 100%;
	min-height: calc(100% - 52px);
	background-color: #fff;
	position: absolute;
	left: 0;
	top: 0;
}
</style>
