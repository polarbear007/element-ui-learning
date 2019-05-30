<template>
	<div id="app">
		<el-autocomplete v-model="input" :fetch-suggestions="querySearch">
			<!-- 在 el-autocomplete 标签内添加  template 子标签，然后使用作用域插槽
			*    拿到 item 对象。 这个item 对象就是要显示的每一条建议数据。
			*    我们可以在 template 标签内使用 item 对象创建一个符合自己要求的模板
			*  -->
			<template v-slot="{ item }">
				<span v-if="item.age != undefined">{{item.value}} ({{item.age}} 岁)</span>
				<span v-else>{{item.value}}</span>
			 </template>
		</el-autocomplete>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			input: '',
			// 使用了模板以后，我们不仅可以显示 value ，还可以显示其他属性值
			advices: [
				{value: 'Alice', age: 12},
				{value: 'Tom', age: 23},
				{value: 'Jerry', age: 21},
				{value: 'Rose', age: 15},
				{value: 'Jack', age: 8},
				{value: 'Eric', age: 12},
			]
		}
	},
	methods:{
		querySearch(queryString, match){
			// 这里我们就随便搞个 setTimeout() 来模拟异步获取数据
			setTimeout(()=>{
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
			}, 500);
		}
	}
};
</script>

<style></style>
