<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <br />
    <br />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import * as app from "./app.js";

console.log(process.env.NODE_ENV);

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  },

  data: function() {
    return {
      links: ["home", "products", "categories", "create", "cart"]
      // cart: []
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
<style></style>
<!----
// #7ABD9A // #0D486B // Nav // #CFF09F // nav-hoover // #AADBA8 // accent //
#C64D57 // footer // rgb(41, 54, 20);
--->
