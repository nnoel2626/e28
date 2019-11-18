<template>
	<header>
		<nav class="activeItem">
			<ul>
				<li class="navItem active" v-for="link in links" :key="link">
					<router-link exact :to="{ name: link }">{{ link }}</router-link>
				</li>
				<!-- <li class="navItem active" v-for="link in links" :key="link">
					<router-link v-if="link != 'product'" exact :to="{ name: link }">{{ link }}</router-link>
				</li>-->
			</ul>
		</nav>
	</header>
</template>

<script>
// import * as auth from "../services/AuthService";

export default {
	name: "Navbar",
	data() {
		return {
			links: ["home", "categories", "products", "addProduct", "cart"]
		}; //return
	} //data
};
</script>

<style lang="css">
header {
	display: flex;
	justify-content: center;
	align-items: center;
}
nav {
	font-family: "Roboto", "Lato", "Open Sans", sans-serif;
	font-size: 18px;
	margin: 10px auto 10px;
	background-color: #2e2f30;
	box-shadow: 0 1px 30px 15px #ccc;
	border-radius: 2px;
	height: 3rem;
	width: 100%;
	justify-content: center;
	align-items: center;
}

nav li {
	display: inline-block;
	list-style-type: none;
}

a:hover {
	background-color: rgb(0, 140, 255);
	color: white;
	text-decoration: none;
}

a.router-link-active:link,
a.router-link-active:visited,
a.router-link-active:active,
a.router-link-active:hover {
	text-decoration: none;
	color: rgb(50, 203, 167);
	cursor: inherit;
}

nav a {
	text-decoration: none;
	color: white;
	outline: none;
	padding: 0px 20px 20px 20px;
	text-transform: uppercase;
	font-weight: bold;
	line-height: 2;
	text-decoration: none;
}

nav.home nav.addProduct nav.categories nav.productList nav.productDetails {
	background-color: #5a58e3;
}

/* p {
	text-align: center;
	color: #7e9098;
	font-size: 22px;
} */
</style>

