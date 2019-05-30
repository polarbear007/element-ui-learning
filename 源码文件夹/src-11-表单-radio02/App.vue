<template>
	<div id="app">
		<el-radio-group v-model="fruit" @change="fruitChange">
			<el-radio-button label="apple">苹果</el-radio-button>
			<el-radio-button label="banana">香蕉</el-radio-button>
			<el-radio-button label="orange">橘子</el-radio-button>
		</el-radio-group>
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {
				fruit: ''
			}
		},
		methods:{
			// change 事件会传入新选中的选项值
			fruitChange(newValue){
				console.log('你选中了' + newValue);
			}
		}
	}
</script>

<style></style>
