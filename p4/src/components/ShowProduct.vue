<template>
	<div>
		<div class="container product">
			<div class="card text-left">
				<div class="card-header">
					<p class="card-header-title">Model: {{ product.model }}</p>
				</div>
				<p class="product-subtitle mb-2">Building: {{ product.building }}</p>
				<p class="product-subtitle mb-2">Room: {{ product.room }}</p>

				<div class="card-content">
					<p>Frequency: {{ product.assigned_freq }}</p>
					<p>Frequency: {{ product.group }} and{{ product.channel }}</p>
				</div>
				<div class="card-footer bg-transparent">
					<router-link :to="{ name: 'product', params: { slug: product.slug } }">
						<button variant="primary">View Mic Details</button>
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
			searchTerm: ""
			// myKey:"SearchPRoduct",
			// myDir:"SearchPRoduct"
		};
	}
};
</script>

<style scoped>
div.row {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
}
.card-header {
	background-color: #eee563;
}

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
button {
	display: inline-block;
	/* padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0; */
	border-radius: 3em;
	box-sizing: border-box;
	text-decoration: none;
	font-family: "Roboto", sans-serif;
	font-weight: 200;
	color: #c64d57;
	background-color: #aadba8;

	text-align: center;
	transition: all 0.2s;
}

button:hover {
	background-color: rgb(107, 143, 49);
}
</style>
