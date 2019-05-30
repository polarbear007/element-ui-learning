
<template>
	<div id="app">
		<el-tree :data="datas"></el-tree>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datas: [
				{
					label: '一级菜单1',
					children: [
						{
							label: '二级菜单1',
							children: [
								{label: '三级菜单1'},
								{label: '三级菜单2'}
							]
						},
						{
							label: '二级菜单2',
							children: [
								{label: '三级菜单1'},
								{label: '三级菜单2'}
							]
						}
					]
				},
				{
					label: '一级菜单2'
				},
				{
					label: '一级菜单3'
				}
			]
		};
	},
	methods: {
	}
};
</script>

<style></style>
