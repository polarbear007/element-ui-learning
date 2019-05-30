<template>
	<div id="app">
		<el-transfer v-model="value" :data="data" filterable></el-transfer>
	</div>
</template>

<script>
	export default{
		name: "App",
		data(){
			return {
				value: [],
				data: []
			}
		},
		// 生成一些 data 数据用来演示
		mounted(){
			let data = [];
			for (let i = 1; i < 6; i++) {
				let obj = {
					key: i,
					label: `选项${i}`,
				}
				data.push(obj);
			}
			this.data = data;
		}
	}
</script>

<style>
</style>
