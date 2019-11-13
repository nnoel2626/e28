<template>
	<div id="app">
		<Navbar />
		<div id="app-container">
			<router-view/> 
		</div>
		<Footer />
	</div>
</template>
<script>
// import { products } from "./wirelessListArray.js";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import './wirelessListArray.js';

export default {
	name: "app",
	components: {
		Navbar,
		Footer
	}
};
</script>

<style >
/* @import url("https://fonts.googleapis.com/css?family=Lato:400,700"); */
</style>
