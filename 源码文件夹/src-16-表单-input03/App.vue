<template>
	<div id="app">
		<el-autocomplete v-model="input" :fetch-suggestions="querySearch"></el-autocomplete>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			input: '',
			// 我们可以预先加载建议数据，必须是一个对象数组
			// 每个对象必须有一个 value 属性，选中后才能显示在输入框中，其他的属性就随意了
			advices: [
				{value: 'Alice'},
				{value: 'Tom'},
				{value: 'Jerry'},
				{value: 'Rose'},
				{value: 'Jack'},
				{value: 'Eric'},
			]
		}
	},
	methods:{
		// :fetch-suggestions   绑定一个回调函数，每次我们在输入框中输入数据
		// 都会执行这个 回调函数， 要拿返回值
		// 第一个参数是 input 框里面输入的内容
		// 第二个参数是一个函数，我们搜索以后，需要把搜索的结果通过这个函数返回给输入框
		querySearch(queryString, match){
			if(queryString.trim() === ''){
				// 如果我们什么都没有输入的话，那么只返回前三条
				match(this.advices.slice(0,3));
			}else{
				// 我们直接根据 queryString 去搜索 advices 里面匹配的数据
				let results = this.advices.filter(function(element){
					// includes() 函数本身区分大小写，所以我们这里全部转成小写
					return element.value.toLowerCase().includes(queryString.toLowerCase());
				});
				
				if(results.length === 0){
					results.push({value: '无匹配的推荐！'});
				}
				match(results);
			}
		}
	}
};
</script>

<style></style>
