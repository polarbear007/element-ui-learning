<template>
	<div id="app">
		<el-button @click="testNotify">test-notify</el-button>
		<el-button @click="testNotify2">test-notify2</el-button>
		<el-button @click="testNotify3">test-notify3</el-button>
		<el-button @click="testNotify4">test-notify4</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		testNotify(){
			this.$notify({
				type: 'success',
				message: '右上角',
				position: 'top-right'
			})
		},
		testNotify2(){
			this.$notify({
				type: 'success',
				message: '右下角',
				position: 'buttom-right'
			})
		},
		testNotify3(){
			this.$notify({
				type: 'success',
				message: '左下角',
				position: 'buttom-left'
			})
		},
		testNotify4(){
			this.$notify({
				type: 'success',
				message: '左上角',
				position: 'top-left'
			})
		}
	}
};
</script>

<style>
</style>
