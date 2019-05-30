<template>
	<div id="app">
		<!-- 列与列之间的间隔默认为 0px ，现在设置为 10 px 
		* 	 【注意】 这个间隔长度，其实是从列中截取出来的。 使用了 gutter 以后，你会发现每一列的长度都变小了
		* -->
		<el-row :gutter="10">
			<!-- span属性决定列的宽度，总的是 24 个单位 -->
			<el-col :span="3"><div style="background: goldenrod;">占用3个单位宽度</div></el-col>
			<el-col :span="4"><div style="background: pink;">占用4个单位宽度</div></el-col>
			<el-col :span="5"><div style="background: skyblue;">占用5个单位宽度</div></el-col>
		</el-row>
		<br>
		<el-row >
			<!-- 这一行没有设置 gutter 属性，所以你看这一行的 三个单位，明显比前面要长 -->
			<el-col :span="3"><div style="background: goldenrod;">占用3个单位宽度</div></el-col>
		</el-row>
		<br>
		<el-row>
			<!-- offset 属性表示距离左边列 3 个单位 -->
			<el-col :span="3" :offset="3"><div style="background: goldenrod;">占用3个单位宽度</div></el-col>
		</el-row>
		<el-row>
			<!-- push 属性表示在原来的位置再向右移  3 个单位 -->
			<el-col :span="3" :offset="3" :push="3"><div style="background: goldenrod;">占用3个单位宽度</div></el-col>
		</el-row>
		<el-row>
			<!-- pull 属性表示在原来的位置再向左移  3 个单位 -->
			<el-col :span="3" :offset="3" :pull="3"><div style="background: goldenrod;">占用3个单位宽度</div></el-col>
		</el-row>
		
		<div style="width: 700px; height: 300px; border: 1px solid black;">
			<!-- 如下的设置表示 水平排列 + 居中对齐 -->
			<el-row type="flex" justify="center">
				<el-col :span="3"><div style="background: goldenrod;">占用3个单位宽度</div></el-col>
				<el-col :span="4"><div style="background: paleturquoise;">占用4个单位宽度</div></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	</script>

<style>
</style>