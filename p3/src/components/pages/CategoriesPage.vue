<template>
	<div class="container">
		<h2>Categories</h2>
		<ul class="cleanList">
			<li v-for="(category, id) in categories" :key="id">{{ category }}</li>
		</ul>
	</div>
</template>


<script>
//const axios = require("axios");
//import * as app from "./../../app.js";

import { products } from "./../../products.js";

export default {
	name: "CategoriesPage",
	data: function() {
		return {
			products: products
			//categories: "categories"
		};
	},

	computed: {
		categories: function() {
			let categories = this.products.map(product => product.categories);
			let mergedCategories = [].concat.apply([], categories);
			// Return unique, sorted categories
			return [...new Set(mergedCategories)].sort();
		}
	}

	// methods: {
	// 	loadCategories: function() {
	// 		let categories = this.products.map(product => product.categories);
	// 		let mergedCategories = [].concat.apply([], categories);
	// 		//Return unique, sorted categories
	// 		return [...new Set(mergedCategories)].sort();
	// 		this.categories = [...new Set(mergedCategories)].sort();
	// 	}
	// }

	// mounted() {
	// 	app.axios.get(app.config.api + "products").then(response => {
	// 		this.products = response.data;
	// 		this.loadCategories();
	// 	});
	// }
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
/* div.row {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
}

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
} */
</style>