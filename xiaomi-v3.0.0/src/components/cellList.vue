<template>
  <div id="cellList" class="cellList">
	<ul class="cellList-ul">
		<li v-for="(item,index) in cellList" :key='index'>
			<img :src="item.url" :alt="item.desc">
		</li>
	</ul>
  </div>
</template>
<script>
export default {
  name: 'cellList',
  data() {
    return {
    	cellList:[]
    }
  },
  created() {
  	console.log('cellList.vue】');
  	this.$ajax.run('getCellList', {}, r => {
        console.log(r);
        this.cellList = r;
    });
  },
  methods: {
  	goToCell(item) {
  		console.log(item);
  	}
  }
}

</script>
<style scoped>
.cellList-ul{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.cellList-ul li{
	flex: 1;
}
.cellList-ul li img{
	width: 100%;
	height: 100%;
}
</style>
