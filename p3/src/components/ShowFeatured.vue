<template>
	<div class="container">
		<div id="featured">
			<h2>Featured Products</h2>
			<ul class="cleanList">
				<li v-for="product in featuredProducts" :key="product.id">{{ product.name }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
// ToDo: Refactor this component so it gets products from the API rather than products.js

import { products } from "./../products.js";

export default {
	name: "ShowFeatured",
	props: ["category"],

	computed: {
		featuredProducts: function() {
			function isMatch(product) {
				return product.categories.includes(this);
			}
			return this.products.filter(isMatch, this.category);
		}
	},
	data: function() {
		return {
			products: products
		};
	}
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>