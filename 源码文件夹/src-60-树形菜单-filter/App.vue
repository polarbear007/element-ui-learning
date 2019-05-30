<template>
	<div id="app">
		<el-input v-model="filterContent"></el-input>
		<el-tree ref='treeComponent'
				 :data="datas" 
		         :props="treeProps" 
				 show-checkbox
				 node-key="id"
				 :filter-node-method="filterNode">
		</el-tree>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datas: [
				{
					id: 1,
					nodeName: '一级菜单1',
					subNodes: [
						{
							id: 4,
							nodeName: '二级菜单1haha',
							subNodes: [
								{id: 6, nodeName: '三级菜单1'},
								{id: 7, nodeName: '三级菜单2'}
							]
						},
						{
							id: 5,
							nodeName: '二级菜单2',
							subNodes: [
								{id: 8, nodeName: '三级菜单1'},
								{id: 9, nodeName: '三级菜单2'}
							]
						}
					]
				},
				{
					id: 2,
					nodeName: '一级菜单2'
				},
				{
					id: 3,
					nodeName: '一级菜单3'
				}
			],
			treeProps:{
				label: 'nodeName',
				children: 'subNodes'
			},
			filterContent: ''
		};
	},
	watch:{
		// 深度监视 filterContent 的变化
		// 当我们输入新的内容时，就会回调此函数，传入新输入的值
		filterContent(newContent){
			// 当input 框修改内容时，我们就通过 filter 去触发回调函数，传入新输入的值
			this.$refs.treeComponent.filter(newContent);
		}
	},
	methods:{
		// 过滤的回调函数
		// value 参数是我们通过 tree 组件内部的 filter 函数传递的参数
		// data  参数是每个节点对应的信息对象， 就是 label / children / id / disable 之类的
		// node  参数是每个节点对象
		filterNode(value, data, node){
			// 如果我们什么都没输入,也不用比较了，直接全部显示
			if(value.trim() === ''){
				return true;
			}else{
				// 如果我们输入的什么内容，那么就看看节点名是否包含输入的内容
				// 如果包含才显示
				return data.nodeName.includes(value.trim())
			}
		}
	}
};
</script>

<style></style>
