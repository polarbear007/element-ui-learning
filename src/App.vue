<template>
	<div id="app">
		<el-carousel height="200px" type="card">
			<el-carousel-item v-for="i in 6" :key="i">
				<h2 :class="{'is-dark': i % 2 === 0, item: true}">
					{{i}}
				</h2>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
};
</script>

<style>
	.item{
		line-height: 200px;
		text-align:  center;
		background: lightblue;
	}
	.is-dark{
		background: gray;
	}
</style>
