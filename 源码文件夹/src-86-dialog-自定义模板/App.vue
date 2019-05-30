<template>
	<div id="app">
		<el-button @click="isShow = true">显示 dialog 标签</el-button>
		<el-dialog title="提示" :visible.sync="isShow" >
			<!-- 没有指定名字的，就是 dialog 的body 部分 -->
			<template>
				<el-form>
					<el-table :data="tableDatas">
						<el-table-column prop="id" label="编号"></el-table-column>
						<el-table-column prop="name" label="姓名"></el-table-column>
						<el-table-column prop="age" label="年龄"></el-table-column>
						<el-table-column prop="gender" label="性别"></el-table-column>
					</el-table>
				</el-form>
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
			isShow: false,
			
		};
	},
};
</script>

<style>
</style>
