<template>
	<div class="container">
		<div id="product-page">
			<h1>product {{ id }}</h1>
			<button @click="addToCart(product.id)">Add to cart</button>
			<transition name="fade">
				<div class="alert" v-if="addAlert">Your cart has been updated!</div>
			</transition>
			<!-- <router-link :to="{ name: "products"}">&larr; Return to all products</router-link> -->
			<!-- <router-link :to="/productList">&larr; Return to all products</router-link>  -->
		</div>
	</div>
</template>


<script>
import * as app from "./../../app.js";

export default {
	name: "ProductPage",
	props: ["id"],
	data: function() {
		return {
			product: null,
			addAlert: false
		};
	},

	mounted() {
		app.axios.get(app.config.api + "/products/" + this.id).then(response => {
			this.product = response.data;
		});
	},

	methods: {
		addToCart: function(productId) {
			let cart = new app.Cart();
			cart.add(productId);
			app.store.cartCount = cart.count();
			this.addAlert = true;
			setTimeout(() => (this.addAlert = false), 3000);
		}
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