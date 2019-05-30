<template>
	<div id="app">
		<el-tree ref='treeComponent'
				 :data="datas" 
		         :props="treeProps" 
				 show-checkbox
				 node-key="id"
				 @check="handleCheck"
				 @check-change="handleCheckChange">
		</el-tree>
		<el-button @click="click">只选中id为6的叶子节点</el-button>
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
							nodeName: '二级菜单1',
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
			}
		};
	},
	methods:{
		handleCheck(targetNode, treeStatus){
			console.log("check");
			console.log(targetNode);
			console.log(treeStatus);
		},
		handleCheckChange(targetNode, isTargetSelected, isHalfSelected){
			console.log('check-change');
			console.log(arguments);
		},
		click(){
			this.$refs.treeComponent.setCheckedKeys([6]);
		}
	}
};
</script>

<style></style>
