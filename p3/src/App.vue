<template>
	<!-- <div id="app">
		<Navbar />
		<div id="app-container">
			<router-view></router-view>
		</div>
		<Footer />
	</div>-->
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import * as app from "./app.js";

export default {
	// name: "app",
	// components: {
	// 	Navbar,
	// 	Footer
	// },
	// data: function() {
	// 	return {
	// 		links: ["home", "categories", "productList",  "cart"],
	// 		sharedState: app.store,
	// 		cart: []
	// 	};
	// },
	// mounted() {
	// 	this.cart = new app.Cart();
	// 	app.store.cartCount = this.cart.count();
	// }
};
</script>

<style lang='css'>
/* html {
	box-sizing: border-box;
	font-family: "Open Sans", sans-serif;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

* {
	margin: 0;
	padding: 0;
} */
</style>