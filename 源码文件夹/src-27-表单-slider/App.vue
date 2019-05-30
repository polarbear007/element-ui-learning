<template>
	<div id="app">
		<el-slider v-model="value1" ></el-slider>
		<el-slider v-model="value2" :step="10"></el-slider>
		<el-slider v-model="value3" :show-tooltip="false"></el-slider>
	</div>
</template>

<script>
	export default{
		name: "App",
		data(){
			return {
				value1: 0,
				value2: 50,
				value3: 30
			}
		}
	}
</script>

<style>
</style>
