<template>
	<footer id="custom-footer">
		<span class="mr-4">&copy; 2019 Norcius Noel</span>
		<span class="mr-4">Privacy</span>
		<span>Terms of Service</span>
	</footer>
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
/* .container {
	display: flex;
	align-items: space-between;
	justify-content: space-between;
	flex-wrap: wrap;
} */
footer#custom-footer {
	height: 4rem;
	background-color: #353535;
	font-size: 1rem;
	/* position: fixed; */
	/* bottom: 0; */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	margin-top: 100px;
}
</style>

