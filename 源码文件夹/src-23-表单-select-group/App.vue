<template>
	<div id="app">
		<el-select v-model="selected" placeholder="请选择">
			<!-- 我们可以给一个 select 标签下面的 option 标签分下组
			*    el-option-group 标签只是为了分组好看，只有一个 label 属性，其他没有什么作用
			*  -->
			<el-option-group :label="city_group1.label">
				<el-option v-for="(city, index) in city_group1.options" 
				           :key="index"
				           :label="city.label" 
						   :value="city.value">
				</el-option>
			</el-option-group>
			<el-option-group :label="city_group2.label">
				<el-option v-for="(city, index) in city_group2.options" 
				           :key="index"
				           :label="city.label" 
						   :value="city.value">
				</el-option>
			</el-option-group>
		</el-select>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			city_group1: {
				label: '热门城市',
				options: [
					{value: 'bj', label: '北京'},
					{value: 'sh', label: '上海'},
					{value: 'sz', label: '深圳'},
				]
			},
			city_group2:{
				label: '城市',
				options: [
					{value: 'gz', label: '广州'},
					{value: 'xm', label: '厦门'},
					{value: 'hz', label: '杭州'},
					{value: 'xa', label: '西安'},
					{value: 'tj', label: '天津'},
					{value: 'ty', label: '太原'},
				]
			}
		}
	},
};
</script>

<style></style>
