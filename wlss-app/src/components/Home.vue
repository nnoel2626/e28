<template>
	<div class="container">
		<div class="jumbotron custom-home">
			<h1 class="display-4">Wireless app landing Page</h1>
			<p
				class="lead"
			>This is a sample task manager application, built with MongoDB, ExpressJS, VueJS, and NodeJS technologies.</p>
			<hr class="my-4" />
			<p>Click below to begin managing tasks for users.</p>
			<router-link class="btn btn-success btn-lg" to="/login">Login</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",

	data: function() {
		return {};
	}
};
</script>

<style scoped>
.container {
	margin-top: 40px;
	margin-bottom: 20px;
	display: flex;
	align-items: space-between;
	justify-content: space-between;
	flex-wrap: wrap;
}
div #custom-home {
	height: 100%;
	align-items: center;
	justify-content: center;
}

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
</style>






