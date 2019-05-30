<template>
	<div id="app">
		<el-rate v-model="rate1"></el-rate>
		<!-- 添加 colors 属性，颜色会根据评分不同而变化，接收一个字符串数组  -->
		<el-rate v-model="rate2" :colors="colors"></el-rate>
		<!-- 添加 show-text 属性，会根据评分不同，而展示不同的文字。
		*    如果 show-text 为true ，那么就会显示文字；  如果show-text 为false ，则不显示。
		* 	 
		*  -->
		<el-rate v-model="rate3" show-text :texts="texts"></el-rate>
		<!-- 添加了  disabled 属性以后，评分无法修改，只用来展示
		*    因为无法修改，所以我们可以设置小数， 比如 3.5 之类的
		*    我们还可以添加  show-score 显示具体的评分
		*  -->
		<el-rate v-model="rate4" disabled show-score ></el-rate>
	</div>
</template>

<script>
	export default{
		name: "App",
		data(){
			return {
				rate1: null,
				rate2: null,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				rate3: null,
				texts: ['非常不满意', '比较不满意', '满意', '很满意', '非常满意'],
				rate4: 3.5,
			}
		}
	}
</script>

<style>
</style>
