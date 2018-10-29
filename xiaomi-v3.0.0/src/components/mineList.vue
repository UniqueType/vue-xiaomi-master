<template>
	<ul class="mineList">
		<li v-for="(item,index) in list">
			<div class="name-icon">
				<img :src="item.icon" alt="">
			</div>
			<div class="name border_bottom_1">
				<span>{{item.name}}</span>
				<span class="icon"></span>
			</div>
		</li>
		<hr class="bg_eee">
	</ul>
</template>
<script>
export default {
	name: 'mineList',
	data() {
		return {
			list: [{
					name: '会员中心',
					icon: 'static/assets/huiyuan-icon.png'
				},
				{
					name: '我的优惠',
					icon: 'static/assets/youhui-icon.png'
				}, {
					name: '服务中心',
					icon: 'static/assets/fwzx-icon.png'
				}, {
					name: '小米之家',
					icon: 'static/assets/xmzj-icon.png'
				}, {
					name: 'F码通道',
					icon: 'static/assets/fmtd-icon.png'
				}, {
					name: '设置',
					icon: 'static/assets/setting-icon.png'
				}
			]
		}
	},
	created() {

	},
	methods: {

	}
}

</script>
<style>
@import '../common/css/reset.css';
@import '../common/css/common.css';

.mineList li {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
}

.mineList .name-icon {
	width: 32px;
	height: 30px;
}

.mineList img {
	width: 100%;
	height: 100%;
}

.mineList .name {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0 10px;
	margin-left: 20px;
}

.mineList .name .icon {
	display: inline-block;
	width: 20px;
	height: 20px;
	margin-top: 10px;
	background: url('../../static/assets/arrow.png') no-repeat;
	background-size: cover;
	transform: rotate(-90deg);
}
.mineList .name:last-child{
	border: none;
}
hr.bg_eee{
	height: 40px;
	background-color: #eee;
}

</style>
