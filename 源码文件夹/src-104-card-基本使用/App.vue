<template>
	<div id="app">
		<el-card>
			<template v-slot:header>
				<span>这是卡片的标题</span>
				<el-button style="float: right;" type="text">操作按钮</el-button>
			</template>
			<template>
				<div v-for="o in 4" :key="o" class="text item">
					{{'列表内容 ' + o }}
				</div>
			</template>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		
	}
};
</script>

<style></style>
