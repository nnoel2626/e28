<template>
	<div id="cart-page" class="container">
		<h1>Your Cart</h1>
		<div v-if="items.length == 0">No items</div>
		<ul v-else-if="products.length > 0" class="cleanList">
			<li v-for="item in items" :key="item.id">
				<button @click="removeFromCart(item.id)">Remove</button>
				{{ item.quantity }} x {{ getProductDetails(item.id)['model'] }}
			</li>
		</ul>
	</div>
</template>

<script>
import * as app from "./../../app.js";
//import { products } from "./../../products.js";
export default {
	name: "CartPage",
	data: function() {
		return {
			items: [],
			cart: null,
			products: []
		};
	},
	methods: {
		getProductDetails(productId) {
			return this.products.find(({ id }) => id === productId);
		},
		removeFromCart: function(productId) {
			this.cart.remove(productId);
			app.store.cartCount = this.cart.count();
		}
	},
	mounted() {
		this.cart = new app.Cart();
		this.items = this.cart.getItems();
		//It would be more ideal if we could ping our server-api for *just*
		//the products that are in our cart. However, we don't have that option
		//with our Mock API, so we’re fetching all the product data.
		this.products = app.axios
			.get(app.config.api + "products")
			.then(response => (this.products = response.data));
	}
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