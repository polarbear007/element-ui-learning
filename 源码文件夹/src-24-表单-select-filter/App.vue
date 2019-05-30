<template>
	<div id="app">
		<!-- 我们可以给 select  标签配置一个 filterable 属性
		*    配置了以后，我们就可以在 select 框里面输入查询内容
		*    默认情况下，会根据我们输入的内容去查找相关的 option 选项
		*  -->
		<el-select v-model="selected" filterable placeholder="请选择">
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
