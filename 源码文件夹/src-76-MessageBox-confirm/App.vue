<template>
	<div id="app">
		<el-button @click="testConfirm">test-confirm</el-button>
		<el-button @click="testConfirm2">test-confirm2</el-button>
		<el-button @click="testConfirm3">test-confirm3</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		testConfirm(){
			// 如果我们什么都不处理，其实 $confirm() 跟 $alert() 功能差不多
			this.$confirm('This is message!', "This is title");
		},
		testConfirm2() {
			// 根据用户点击的结果进行不同的处理操作
			this.$confirm('你真的要删除这个文件吗？', '提示')
			.then(()=>{
				this.$message({
					type: 'success',
					message: '成功删除文件！'
				});
			}).catch(()=>{
				this.$message({
					type: 'info',
					message: '您取消了删除操作！'
				})
			})
		},
		testConfirm3(){
			this.$confirm('删除后不可恢复，你真的要删除这个文件吗？', '提示', {
				confirmButtonText: '删除',
				cancelButtonText: '不删除',
				type: 'error',
				// action 参数其实是一个字符串，我们前面已经讲过了，可能是 confirm 可能是cancel 可能是close
				// instance 其实是 MessageBox 对象，我们可以拿这个对象做出一些额外的效果
				// done 是一个函数，当我们执行 done() 函数，表示什么都不处理，直接关闭弹窗
				beforeClose(action, instance, done){
					// 如果是按 confirm 按钮，我们可以执行某些异步任务
					if(action === 'confirm'){
						// 执行异步任务的时候，我们还可以通过 instance 对象，做出loding 样式
						instance.confirmButtonLoading = true;
						instance.confirmButtonText = '删除中...';
						setTimeout(()=>{
							// 完成任务以后，我们再把按钮上面的 loding 状态设置成 false
							// 文字也改回来
							instance.confirmButtonLoading = false;
							instance.confirmButtonText = '完成！';
							// 留一点点时间让用户看到效果
							setTimeout(()=>{
								done();
							}, 1000);
						}, 2000);
					}else{
						// 如果不是按的 confirm 按钮，我们直接关闭
						done();
					}
				}
				// 照样，删除成功以后，我们就提示删除成功
			}).then(()=>{
				this.$message({
					type: 'success',
					message: '成功删除文件！'
				});
				// 取消，就提示取消
			}).catch(()=>{
				this.$message({
					type: 'info',
					message: '您取消了删除操作！'
				})
			})
		}
	}
};
</script>

<style>
</style>
