<template>
  <div id="featured" class="container cleanList">
    <div class="heading">
      <h2>Featured Products</h2>
      <span>This month's featured wireless microphones</span>
    </div>
    <div class="container">
      <div
        class="card text-left"
        data-test="featured-product"
        v-for="product in featuredProducts"
        :key="product.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ product.model }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ product.building }}</h6>
          <p class="card-text">{{ product.room }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
// import * as app from "./../app.js";
export default {
  name: "ShowFeatured",
  props: ["category"],

  computed: {
    featuredProducts: function() {
      return _.filter(this.products, product => {
        return product.categories.includes(this.category);
      });
    },

    products: function() {
      return this.$store.state.products;
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
/* .container {
  margin-top: 1rem;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
} */
/* .mainContent {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
} */

div > h2 {
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
span {
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
.card-body {
  margin-top: 10px;
  margin-bottom: 10px;
  /* //margin:1rem; */
  flex: 1 1 auto;
  /* padding: 1rem; */
  width: 90%;
}

#featured {
  background-color: lighten(#7fdbff, 10%);
  border-radius: 5px;
  padding: 10px;
}
</style>
