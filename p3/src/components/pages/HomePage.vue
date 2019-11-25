<template>
	<div>
		<div class="container">
			<b-jumbotron>
				<template v-slot:header>Wireless Microphone App</template>
				<template v-slot:lead>This App will make it easier to find wireless by building locations</template>
				<hr class="my-4" />
				<p>User needs to register or sign-in in order to use this app!</p>
				<b-button variant="primary" href="#">Login</b-button>
				<b-button variant="success" href="#">Register</b-button>
			</b-jumbotron>
			<div class="mainContent">	
				
				<show-featured></show-featured>
			</div>
		</div>
	</div>
</template>

<script>
import * as app from "./../../app.js";

import ShowFeatured from "./../ShowFeatured.vue";

export default {
	name: "HomePage",
	components: { ShowFeatured },

	data: function() {
		return {
			sharedState: app.store,
			//featuredCategory: ["portableMic", "installedMic"]
		};
	}
};
</script>

<style scoped="css">
.container {
	margin-top:3rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	text-align: center;
}


</style>