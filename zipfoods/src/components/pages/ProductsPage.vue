<template>
	<div id="products">
		<h2>Products</h2>
		<show-product v-for="product in products" :key="product.id" :product="product"></show-product>
	</div>
</template>

<script>
const axios = require("axios");
import ShowProduct from "./../ShowProduct.vue";
//import { products } from "./../../products.js";
//import * as app from './../../app.js';
export default {
	name: "ProductsPage",
	components: { ShowProduct },
	data: function() {
		return {
			products: null
		};
	},

	mounted() {
		axios
			.get(
				"https://my-json-server.typicode.com/nnoel2626/e28-zipfoods-api/products"
			)
			.then(response => {
				//console.log(response.data);
				this.products = response.data;
			});
	}

	// mounted() {
	// 	app.axios.get(app.config.api + "products").then(response => {
	// 		this.products = response.data;
	// 	});
	// }
};
</script>

<style scoped>
</style>