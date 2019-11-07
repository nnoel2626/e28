<template>
	<div id="app">
		<div class="container">
			<b-navbar toggleable="md" type="dark" class="nav-background">
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				<b-navbar-brand href="#">Wireless App</b-navbar-brand>
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav>
						<b-nav-item v-for="link in links" :key="link">
							<router-link exact :to="paths[link]">{{ link }}</router-link>
						</b-nav-item>
					</b-navbar-nav>
					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown right>
							<!-- Using button-content slot -->
							<template slot="button-content">
								<em>User</em>
							</template>
							<b-dropdown-item href="#">Profile</b-dropdown-item>
							<b-dropdown-item href="#">Signout</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>

<script>
import { products } from "./wirelessListArray.js";


export default {
	name: "app",

	components: {},

	data() {
		return {
			products: products,

			links: [
				// "LogIn",
				"Home",
				"productList",
				"addProduct",
				"users"
			],
			paths: {
				// logIn: "/",
				Home: "/",
				productList: "/ShowProducts",
				addProduct: "/addProduct",
				users: "/users"
			}
		}; //return
	} //data
};
</script>

<style >
/* @import url("https://fonts.googleapis.com/css?family=Lato:400,700"); */

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}
body {
	background: #eef1f4 !important;
}

.nav-background {
	background: #353535;
}
.nav-link a {
	text-decoration: none;
	color: #e9ecef;
	display: block;
}

</style>
