<template>
	<div id="app">
		<el-button @click="isShow = true">显示 dialog 标签</el-button>
		<el-button @click="test">test</el-button>
		<el-dialog title="提示" :visible.sync="isShow" ref="dialogComponent">
			<!-- 没有指定名字的，就是 dialog 的body 部分 -->
			<template>
				<span>这是dialog 的body 部分</span>
			</template>
			
			<!-- 这是 dialog 的 footer 部分 -->
			<template v-slot:footer>
				<el-button @click="isShow = false">取消</el-button>
				<el-button @click="isShow = false">确认</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	computed:{
		isShow:{
			get(){
				return this.$store.state.isShow;
			},
			set(newValue){
				this.$store.commit('updateIsShow', newValue);
			}
		}
	},
	methods:{
		test(){
			this.$refs.dialogComponent.open();
		}
	}
};
</script>

<style>
</style>
