<template>
	<div id="app">
		<el-row>
			<el-col :span="7">
				<el-radio-group v-model="isCollapse" size="mini">
					<el-radio-button :label="true" >关闭</el-radio-button>
					<el-radio-button :label="false">开启</el-radio-button>
				</el-radio-group>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="7">
				<el-menu background-color="#ffffff"
						 text-color="#303133"
						 active-text-color="#409EFF"
						 :collapse="isCollapse"
						 @open="handleOpen"
						 @close="handleClose"
						 @select="handleSelect">
					<el-submenu index="1">
						<template v-slot:title>
							<i class="el-icon-user-solid"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group>
							<template v-slot:title>普通管理员权限</template>
							<el-menu-item index="1-1">添加用户</el-menu-item>
							<el-menu-item index="1-2">查询用户</el-menu-item>
							<el-menu-item index="1-3">修改用户</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<template v-slot:title >超级管理员权限</template>
							<el-menu-item index="1-4">删除用户</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-s-shop"></i>
						<span>商户管理</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-s-order"></i>
						<span>订单管理</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-s-check"></i>
						<span>权限管理</span>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isCollapse: true
		}
	},
	methods:{
		// 打开子菜单会触发 open 事件，传入子菜单对应的 index 
		// indexPath 是一个 index 数组，表示这个子菜单的路径
		// 比如说一个三级的子菜单路径可能是：  ['1', '1-2']
		handleOpen(index, indexPath){
			console.log('open');
			console.log('index: ' +  index);
			console.log('indexPath: ' + indexPath);
		},
		// 关闭子菜单会触发 close 事件，传入子菜单对应的 Index 和 indexPath
		handleClose(index, indexPath){
			console.log('open');
			console.log('index: ' +  index);
			console.log('indexPath: ' + indexPath);
		},
		// 点击具体的菜单项会触发 select 事件，传入菜单项对应的 index 和 indexPath
		handleSelect(index, indexPath){
			console.log('open');
			console.log('index: ' +  index);
			console.log('indexPath: ' + indexPath);
		}
	}
}
</script>

<style></style>
