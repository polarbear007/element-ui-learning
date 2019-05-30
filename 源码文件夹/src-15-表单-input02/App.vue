<template>
	<div id="app">
		<el-input v-model="input1" placeholder="请输入内容">
			<i slot="append">.com</i>
		</el-input>
		<el-input v-model="input2" placeholder="请输入内容">
			<i slot="prepend">http://</i>
		</el-input>
		<el-input v-model="input3" placeholder="请输入内容">
			<el-button slot="append" class="el-icon-search">搜索</el-button>
		</el-input>
		<el-input v-model="input4" placeholder="请输入内容">
			<el-select slot="prepend" v-model="select" placeholder="请选择" style="width: 100px;">
				<el-option label="商品" value="product"></el-option>
				<el-option label="店铺" value="shopName"></el-option>
			</el-select>
			<el-button slot="append" class="el-icon-search">搜索</el-button>
		</el-input>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			input1: '',
			input2: '',
			input3: '',
			input4: '',
			select: ''
		};
	}
};
</script>

<style></style>
