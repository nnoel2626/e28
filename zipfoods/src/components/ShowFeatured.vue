<template>
	<div id="featured">
		<h2>Featured Products</h2>
		<ul class="cleanList">
			<li v-for="product in featuredProducts" :key="product.id">{{ product.name }}</li>
		</ul>
	</div>
</template>

<script>
// ToDo: Refactor this component so it gets products from the API rather than products.js

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
			products: null
		};
	}
};
</script>

<style scoped>
</style>