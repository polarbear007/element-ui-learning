<template>
	<div id="app">
		<el-popover content="使用点击触发" title="标题" trigger="click">
			<el-button class="btn" slot="reference">使用点击触发</el-button>
		</el-popover>
		
		<el-popover content="使用鼠标移动触发" title="标题" trigger="hover">
			<el-button class="btn" slot="reference">使用鼠标移动触发</el-button>
		</el-popover>
		
		<el-popover content="光标聚焦到此输入框时触发" title="标题" trigger="focus">
			<el-input class="btn" slot="reference"></el-input>
		</el-popover>
		
		<!-- 如果我们想要使用手动激活，那么 trigger=manual ， 同时我们还要使用 v-model 绑定一个boolean 变量 -->
		<el-popover content="手动激活,一般是绑定一个变量" title="标题" trigger="manual" v-model="isShow">
			<el-button class="btn" slot="reference">手动激活</el-button>
		</el-popover>
		
		<el-button @click="click">控制popover 是否激活</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: false
		};
	},
	methods:{
		click(){
			this.isShow = !this.isShow;
		}
	}
};
</script>

<style>
	.btn{
		margin: 40px;
	}
</style>
