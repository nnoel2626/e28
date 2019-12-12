<template>
  <div id="rentalCart-page" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h3>Your Rental Cart</h3>
        <!-- <div v-if="items.length == 0">No items</div>
        <ul v-else-if="products.length > 0" class="cleanList">
          <li v-for="item in items" :key="item.id">
            <button @click="removeFromCart(item.id)">Remove</button>
            {{ item.quantity }} x {{ getProductDetails(item.id) }}       
          </li>
				</ul>-->

        <div v-if="items.length == 0">No items</div>
        <ul data-test="cart-contents" v-else-if="products" class="cleanList">
          <li v-for="item in items" :key="item.slug">
            <button
              data-test="remove-from-cart-button"
              @click="removeFromCart(item.slug)"
            >
              Remove
            </button>
            {{ item.quantity }} x
            {{ getProductDetails(item.slug)['make'] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as app from "./../../app.js";
export default {
  name: "CartPage",
  data: function() {
    return {
      items: [],
      cart: null
    };
  },
  methods: {
    getProductDetails(productSlug) {
      return this.$store.getters.getProductBySlug(productSlug);
    },
    removeFromCart: function(productId) {
      this.cart.remove(productId);
      //app.store.cartCount = this.cart.count();
      this.$store.commit("setCartCount", this.cart.count());
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.cart = new app.Cart();
    this.items = this.cart.getItems();
  }
};
</script>
<style scoped>
.container {
  text-align: center;
  list-style-type: none;
}
div > h2 {
  margin: 0 auto;
  margin-top: 30px;
}
</style>
