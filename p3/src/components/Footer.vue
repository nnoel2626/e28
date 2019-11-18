<template>
	<div class="container">
		<footer id="custom-footer">
			<span class="mr-4">&copy; 2019 Norcius Noel</span>
			<span class="mr-4">Privacy</span>
			<span>Terms of Service</span>
			<hr />
		</footer>
	</div>
</template>

<script>
export default {
	name: "Footer",
	data: function() {
		return {};
	},
	methods: {}
};
</script>
<style scoped>
footer#custom-footer {
	height: 4rem;

	font-size: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: rgb(20, 18, 18);
	margin-top: 100px;
}
</style>

