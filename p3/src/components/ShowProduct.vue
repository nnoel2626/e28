<template>
	<div>
		<div class="container product">
			<div class="card text-left">
				<div class="card-header">
					<p class="card-header-title">Model: {{ product.model}}</p>
				</div>
				<p class="product-subtitle mb-2">Building: {{ product.building }}</p>
				<p class="product-subtitle mb-2">Room: {{ product.room }}</p>

				<div class="card-content">
					<p>Frequency: {{ product.assigned_freq }}</p>
					<p>Frequency: {{ product.group }} and{{ product.channel }}</p>
				</div>
				<div class="card-footer bg-transparent">
					<router-link :to="{ name: 'product', params: {'id' : product.id }}">
						<b-button variant="primary">View Mic Details</b-button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

 <script>

 //import * as app from "./../app.js";
export default {
	name: "ShowProduct",
	props: ["product"],
	data() {
		return {
			//sharedState: app.store,
			//searchTerm: ""
			myKey:"SearchPRoduct",
			myDir:"SearchPRoduct"

		};
	},
	
};
</script>

<style scoped>
div.row {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
}

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
</style>

