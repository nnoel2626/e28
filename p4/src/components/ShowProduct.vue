<template>
	<div>
		<div class="container product">
			<div class="card text-left">
				<div class="card-header">
					<h5
						data-test="product-model"
						class="card-header-title product-model"
					>Model: {{ product.model }}</h5>
				</div>
				<div class="card-content">
					<p class="product-subtitle mb-2">Building: {{ product.building }}</p>
					<p class="product-subtitle mb-2">Room: {{ product.room }}</p>
					<p class="product-subtitle mb-2">Frequency: {{ product.Assigned_freq }}</p>
					<p class="product-subtitle mb-2">Group: {{ product.group }} and{{ product.channel }}</p>
				</div>
				<div class="card-footer bg-transparent">
					<router-link
						data-test="product-link"
						:to="{ name: 'product', params: { slug: product.slug } }"
					>
						<button class="card-footer-text" variant="primary">View Mic Details</button>
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
div {
	margin: 10px 1%;
	min-width: 250px;
	max-width: 250px;
}

.product,
.data-v-1acef832,
.data-v-661181ae {
	position: relative;
	text-align: center;
}
.card-header[data-v-1acef832] {
	margin: 0px;
	text-align: center;
	background-color: #eee563;
}

div > h3 {
	margin: 0 auto;
	margin-top: 30px;
}

h4.card-header-title {
	margin: 0;
	color: rgb(13, 100, 150);
	font-weight: 200;
}
h5.card-header-title {
	margin: 0;
	color: rgb(13, 100, 150);
	font-weight: 200;
}

div.card-text {
	font-family: "Nunito", sans-serif;
	font-size: 11px;
	font-weight: 300;
	color: #3d5358;
	margin: 0 auto;
	margin: 29px;
	color: rgb(11, 11, 12);
	letter-spacing: 1px;
}
div.card-content {
	font-size: 0.9em;
	padding: 10px;
	flex: 1 0 auto;
}
button {
	outline: none;
	white-space: normal;
	display: inline-block;
	text-decoration: none;
	border: 0.5px solid#c64d57;
	background-color: #aadba8;
	border-radius: 3em;
	text-align: center;
	transition: all 0.2s;
}
a[data-v-1acef832] {
	background-color: white;
}
button:hover {
	border-radius: 3em;
	background-color: rgb(107, 143, 49);
}
div.card-footer {
	margin: 0px;
	display: flex;
	flex-shrink: 0;
	justify-content: center;
}
.card-footer-text {
	font-family: "Roboto", sans-serif;
	font-weight: 200;
	color: #c64d57;
	font-size: 24px;
}
</style>
