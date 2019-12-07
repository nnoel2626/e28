<template>
  <div>
    <h2>Wireless Microphone Details</h2>
    <div class="card-container">
      <div class="card text-left">
        <div class="card-header">
          <h4 class="card-header-title">Building: {{ product.model }}</h4>
          <p class="card-subtitle mb-2">Room: {{ product.building }}</p>
          <p class="card-subtitle mb-2">Room: {{ product.room }}</p>
        </div>
        <div class="card-content">
          <p class="card-text">Device Make: {{ product.make }}</p>
          <p class="card-text">Device Type: {{ product.mic_type }}</p>
          <p class="card-text">
            Assigned Frequency: {{ product.Assigned_freq }}
          </p>
          <p class="card-text">
            Device Group and Channel: {{ product.group }} and{{
              product.channel
            }}
          </p>
          <p class="card-text">Frequency Band: {{ product.Freq_band }}</p>
          <p class="card-text">Frequency Range: {{ product.Freq_range }}</p>
          <p class="card-text">Serial Number: {{ product.serial_number }}</p>
        </div>
        <div class="card-footer bg-transparent">
          <router-link :to="{ name: 'addProduct' }">
            <button variant="primary">Add Product</button>
          </router-link>

          <router-link :to="{ name: 'products' }">
            <b-button variant="primary">Return to all products</b-button>
          </router-link>
          <div>
            <button @click="addToCart(product.id)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="alert" v-if="addAlert">Your cart has been updated!</div>
    </transition>
  </div>
</template>

<script>
import * as app from "./../../app.js";

export default {
  name: "ProductPage",
  props: ["id"],

  components: {},

  data: function() {
    return {
      addAlert: false
    };
  },
  computed: {
    products: function() {
      return this.$store.getters.getProductById(this.id);
    }
  },

  methods: {
    addToCart: function(productId) {
      let cart = new app.Cart();
      cart.add(productId);
      //app.store.cartCount = cart.count();
      this.$store.commit("cartCount", 1);

      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 3000);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
}
.Card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
div > h2 {
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
}

.card {
  width: 40%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
div.card-header {
  /* display: flex;
	width: 100%;
	height: 40px;
	max-height: 50px;
	align-items: left;
	justify-content: space-between;
	flex: 1 0 auto; */
}
h4.card-header-title {
  /* padding-left: 15px; */
  margin: 0;
  color: rgb(13, 100, 150);
  /* line-height: 45px; */
  font-weight: 200;
}
h5.card-header-title {
  /* padding-left: 25px; */
  margin: 0;
  color: white;
  /* line-height: 65px; */
  font-weight: 200;
}
div.card-content {
  padding: 15 px;
  flex: 1 0 auto;
}
div.card-text {
  font-family: "Nunito", sans-serif;
  font-size: 11px;
  font-weight: 300;
  color: #3d5358;
  margin: 0 auto;
  margin: 29px;
  color: rgb(11, 11, 12);
  letter-spacing: 1px;
}
div.card-footer {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
}

.alert {
  margin: 0 auto;
  width: 40%;
  text-align: center;
  background-color: #93c5d8;
}
</style>
