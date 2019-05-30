
<template>
	<div id="app">
		<el-tree :data="datas" :props="treeProps"></el-tree>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datas: [
				{
					nodeName: '一级菜单1',
					subNodes: [
						{
							nodeName: '二级菜单1',
							subNodes: [
								{nodeName: '三级菜单1'},
								{nodeName: '三级菜单2'}
							]
						},
						{
							nodeName: '二级菜单2',
							subNodes: [
								{nodeName: '三级菜单1'},
								{nodeName: '三级菜单2'}
							]
						}
					]
				},
				{
					nodeName: '一级菜单2'
				},
				{
					nodeName: '一级菜单3'
				}
			],
			treeProps:{
				label: 'nodeName',
				children: 'subNodes'
			}
		};
	},
};
</script>

<style></style>
