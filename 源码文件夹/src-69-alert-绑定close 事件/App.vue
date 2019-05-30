<template>
	<div id="app">
		<el-alert title="hello world" type="warning" effect="dark" @close="hello"></el-alert>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}, 
	methods:{
		hello(){
			alert('hello world!')
		}
	}
};
</script>

<style></style>
