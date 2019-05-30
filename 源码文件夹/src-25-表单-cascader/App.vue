<template>
	<div id="app">
		<!-- el-cascader 标签可以绑定一个数组，里面保存的是被选中的组合选项值
		*    options 属性是指定级联选项的数据来源，接收的是一个对象数组
		*    每个对象都要有  label / value / children 三个属性。
		*     childen 其实就是每个父选项对应的下级菜单目录，也是接收一个对象数组
		*     每个对象还是可以 label / value / children 
		* 
		*  【说明】 一般来说，两级就算是很复杂了，如果层级太多的话，我们也不用这个来做。
		*  -->
		<el-cascader v-model="selectd" :options="options">
		</el-cascader>
	</div>
</template>

<script>
	export default{
		name: "App",
		data(){
			return {
				selectd: [],
				options:[
					{
						label: '开发部',
						value: 'dev-dept',
						children: [
							{value: '001', label: '小王'},
							{value: '002', label: '小李'},
							{value: '003', label: '小张'},
							{value: '004', label: '小黑'},
						]
					},
					{
						label: '测试部',
						value: 'test-dept',
						children: [
							{value: '001', label: 'eric'},
							{value: '002', label: 'rose'},
							{value: '003', label: 'jack'},
							{value: '004', label: 'tom'},
						]
					},
				]
			}
		}
	}
</script>

<style>
</style>
