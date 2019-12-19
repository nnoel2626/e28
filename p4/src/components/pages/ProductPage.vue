<template>
	<div>
		<div class="container product">
			<h2>Wireless Microphone Details</h2>
			<div class="card-container" id="product-page" v-if="product">
				<div class="card text-left">
					<div class="card-header">
						<h4
							data-test="product-model"
							class="card-header-title product-name"
						>Model: {{ product.model }}</h4>
					</div>
					<div class="card-content">
						<p class="product-subtitle mb-2">Building: {{ product.building }}</p>
						<p class="product-subtitle mb-2">Room: {{ product.room }}</p>
						<p class="product-subtitle mb-2">Device Make: {{ product.make }}</p>
						<p class="product-subtitle mb-2">Device Type: {{ product.mic_type }}</p>
						<p class="product-subtitle mb-2">Assigned Frequency: {{ product.Assigned_freq }}</p>
						<p class="product-subtitle mb-2">
							Device Group and Channel: {{ product.group }} and{{
							product.channel
							}}
						</p>
						<p class="product-subtitle mb-2">Frequency Band: {{ product.Freq_band }}</p>
						<p class="product-subtitle mb-2">Frequency Range: {{ product.Freq_range }}</p>
						<p class="product-subtitle mb-2">Serial Number: {{ product.serial_number }}</p>
					</div>
					<div class="card-footer bg-transparent">
						<router-link :to="{ name: 'create' }">
							<button class="card-footer-text" variant="primary">Add Product</button>
						</router-link>

						<router-link :to="{ name: 'products' }">
							<button class="card-footer-text" variant="primary">Return to all products</button>
						</router-link>

						<button
							data-test="add-to-cart-button"
							class="card-footer-text"
							@click="addToCart(product.slug)"
						>Add to cart</button>
					</div>
				</div>
			</div>
			<transition name="fade">
				<div class="alert" v-if="addAlert">Your cart has been updated!</div>
			</transition>
		</div>
	</div>
</template>

<script>
import * as app from "./../../app.js";

export default {
	name: "ProductPage",
	props: ["slug"],

	components: {},

	data: function() {
		return {
			addAlert: false
		};
	},
	computed: {
		product: function() {
			return this.$store.getters.getProductBySlug(this.slug);
		}
	},

	methods: {
		addToCart: function(productId) {
			let cart = new app.Cart();
			cart.add(productId);
			//app.store.cartCount = cart.count();

			this.$store.commit("setCartCount", cart.count());
			this.addAlert = true;
			setTimeout(() => (this.addAlert = false), 3000);
		}
	}
};
</script>

<style scoped>
.container {
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 30px;
}
div > h2[data-v-440e70d3] {
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 20px;
}
.card-container {
	display: flex;
	justify-content: center;
	max-width: 100%;
	margin-bottom: 10px;
}
div.card[data-v-440e70d3] {
	display: flex;
	justify-content: center;
	margin: 10px 1%;
	min-width: 60%;
	max-width: 70%;
	margin-bottom: 20px;
}
.product-subtitle {
	padding: 5px;
}

.product,
.data-v-1acef832,
.data-v-661181ae {
	position: relative;
	text-align: center;
}
.card-header[data-v-440e70d3] {
	margin: 0px;
	text-align: center;
	background-color: #eee563;
}

h4.card-header-title {
	margin: 0;
	font-weight: 200;
	font-size: 24px;
	font-weight: 300;
	color: #c64d57;
}
/* 
div.card-text {

} */
div.card-content {
	font-size: 1.1em;
	padding: 15px;
	flex: 1 0 auto;
}
p.product-subtitle {
	font-family: "Nunito", sans-serif;
	font-size: 20px;
	font-weight: 300;
	text-align: left;
	padding-left: 20px;
}
div.card-footer {
	margin: 0px;
	display: flex;
	flex-shrink: 0;
	align-items: space-between;
	justify-content: space-between;
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
a[data-v-440e70d3] {
	background-color: white;
}
button:hover {
	border-radius: 3em;
	background-color: rgb(107, 143, 49);
}

.card-footer-text {
	font-family: "Roboto", sans-serif;
	font-weight: 200;
	/* color: #c64d57; */
	font-size: 24px;
}

.alert {
	margin: 0 auto;
	width: 40%;
	text-align: center;
	background-color: #93c5d8;
}
</style>
