<template>
	<div>
		<h2>Categories</h2>
		<ul class="cleanList">
			<li v-for="(category, id) in categories" :key="id">{{ category }}</li>
		</ul>
	</div>
</template>


<script>
const axios = require("axios");

import * as app from "./../../app.js";
//import { products } from "./../../products.js";
export default {
	name: "CategoriesPage",
	data: function() {
		return {
			products: null,
			categories: null
		};
	},

	methods: {
		loadCategories: function() {
			let categories = this.products.map(product => product.categories);
			let mergedCategories = [].concat.apply([], categories);
			//Return unique, sorted categories
			return [...new Set(mergedCategories)].sort();
			this.categories = [...new Set(mergedCategories)].sort();
		}
	},
	// mounted() {
	// 	axios
	// 		.get(
	// 			"https://my-json-server.typicode.com/nnoel2626/e28-zipfoods-api/products"
	// 		)
	// 		.then(response => {
	// 			//console.log(response.data);
	// 			this.products = response.data;
	// 			this.loadCategories();
	// 		});
	// }

	
	mounted() {
		app.axios.get(app.config.api + "products").then(response => {
			this.products = response.data;
			this.loadCategories();
		});
	}
};
</script>

<style scoped>
</style>