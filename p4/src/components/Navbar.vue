<template>
  <header>
    <nav id="nav" class="activeItem">
      <ul>
        <li class="navItem active" v-for="link in links" :key="link">
          <router-link exact :to="{ name: link }">{{ link }}</router-link>
          <span v-if="link == 'cart'">({{ cartCount }})</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import * as app from "./../app.js";
export default {
  name: "Navbar",
  data() {
    return {
      links: ["home", "products", "categories","addProduct", "cart"]
    };
  },

  computed: {
    cartCount: function() {
      return this.$store.state.cartCount;
    }
  },
  mounted() {
    this.cart = new app.Cart();
    this.$store.commit("setCartCount", this.cart.count());
    this.$store.dispatch("setProducts");
  }
};
</script>

<style lang="css">
#nav {
	padding: 10px;
	background-color: #7abd9a;
}

#nav a {
	font-weight: bold;
	color: #c64d57;
}

#nav a.router-link-exact-active {
	color: #0d486b;
}
av {
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
	background-color: #aadba8;
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
</style>
