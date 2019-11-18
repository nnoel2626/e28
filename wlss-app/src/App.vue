<template>
	<div id="app">
		<Navbar />
		<div id="app-container">
			<router-view />
		</div>
		<Footer />
	</div>
</template>
<script>
// import { products } from "./products.js";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "app",
	components: {
		Navbar,
		Footer
	}
};
</script>

<style lang="scss">
// $image-path: "~@/../mdb/mdbvue/img"; // image path variable update
// @import "~@/../mdb/mdbvue/scss/mdb.scss"; // main mdb scss file
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"); // font import
</style>
