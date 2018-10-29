<template>
  <div id="popMask">
  	<div class="meng" @click='close'></div>
  </div>
</template>

<script>
export default {
  name: 'popMask',
  data () {
  	return {
  	}
  },
  created () {
  	console.log('【popMask.vue】');
  },
  methods:{
  	close() {
  		if (this.isClose === '0') return;
  		// this.$emit('closePopMask','')
  	}
  },
  mounted() {
  },
  props: {
  	isClose: {
  		type: String,
  		default: '0' // 0表示点击无效  1表示点击关闭
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../common/css/reset.css';
.meng{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.4);
}
</style>
