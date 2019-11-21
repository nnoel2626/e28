<template>
	<div id="featured" class="container">
		<h2>Featured Products</h2>
		<ul class="cleanList">
			<li v-for="product in featuredProducts" :key="product.id">{{ product.model }}</li>
		</ul>
	</div>
</template>

<script>
import * as app from "./../app.js";
export default {
	name: "ShowFeatured",

	props: ["category"],

	computed: {		
		featuredProducts: function() {
			function isMatch(product) {
				return product.categories == this;
			}
			return this.sharedState.products.filter(isMatch, this.category);
		}
	},

	data: function() {
		return {
			sharedState: app.store
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
#featured {
	background-color: lighten(#7fdbff, 10%);
	border-radius: 5px;
	padding: 10px;
}
</style>