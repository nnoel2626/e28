<template>
	<div class="container">
		<div id="product-page" v-if="product">
			<h1>product {{ id }}</h1>

			<!-- <h1>{{ product.model }}</h1>
			<div>
				<p class="bulidind">{{ product.building }}</p>
				<p class="room">{{ product.room }}</p>
				<p class="group">{{ product.group }}</p>
				<p class="channel">{{ product.channel }}</p>
			</div>
			<div>
				<p class="mic_type">{{ product.mic_type }}</p>
				<p class="band">{{ product.band }}</p>
				<p class="freq_range">{{ product.freq_range }}</p>
				<p class="freq_band">{{ product.freq_band }}</p>
				<p class="assigned_frequency">{{ product.assigned_frequency}}</p>
			</div>-->
			<!-- <button @click="addToCart(product.id)">Add to cart</button>

		<transition name="fade">
			<div class="alert" v-if="addAlert">Your cart has been updated!</div>
			</transition>-->

			<!-- <router-link :to="/productList">&larr; Return to all products</router-link> -->
		</div>
	</div>
</template>


<script>
//import * as app from './../../app.js';

export default {
	name: "ProductDetailsPage",
	props: ["id"],
	data: function() {
		return {
			//product: product
			//addAlert: false
		};
	},
	created() {
		this.id = this.$route.params.id;
	}


	// methods: {
	// 	addToCart: function(productId) {
	// 		let cart = new app.Cart();
	// 		cart.add(productId);
	// 		app.store.cartCount = cart.count();
	// 		this.addAlert = true;
	// 		setTimeout(() => (this.addAlert = false), 3000);
	// 	}
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