<template>
	<div class="container">
		<b-jumbotron>
			<template v-slot:header>Wireless Microphone App</template>
			<template v-slot:lead>This App will make it easier to find wireless by building locations</template>
			<hr class="my-4" />
			<p>User needs to register or sign-in in order to use this app!</p>
			<b-button variant="primary" href="#">Login</b-button>
			<b-button variant="success" href="#">Register</b-button>
		</b-jumbotron>
		<show-featured :category="featuredCategory"></show-featured>
	</div>
</template>

<script>
import ShowFeatured from "./../ShowFeatured.vue";

export default {
	name: "HomePage",

	components: {
		ShowFeatured
	},

	data: function() {
		return {
			featuredCategory: "portable"
		};
	}
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	text-align: center;
}

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
</style>