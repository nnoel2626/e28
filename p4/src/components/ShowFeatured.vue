<template>
  <div id="featured" class="container cleanList">
    <div class="heading">
      <h2>Featured Products</h2>
      <span>This month's featured wireless microphones</span>
    </div>

    <div class="mainContent">
      <div
        class="card text-left"
        data-test="featured-product"
        v-for="product in featuredProducts"
        :key="product.id"
      >
        <div class="card-body">
          <p class="card-title">{{ product.model }}</p>
          <p class="card-subtitle mb-2 text-muted">{{ product.building }}</p>
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
.container {
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.heading {
  margin: 0 auto;
  display: block;
  text-align: center;
  /* background-color: #eee563; */
}
.mainContent {
  display: flex;
  /* align-items: space-between; */
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
div.card {
  text-align: center;
  margin: 10px 0.5%;
  min-width: 180px;
  max-width: 180px;
}

.card-body[data-v-4d824cfb] {
  background-color: #aadba8;
  flex: 1 1 auto;
  width: 100%;
}

p.card-title {
  font-family: "Nunito", sans-serif;
  margin: 0;
  color: rgb(13, 100, 150);
  font-size: 16px;
  font-weight: 200;
  text-align: center;
}

p.card-subtitle {
  font-family: "Nunito", sans-serif;
  margin: 0;
  color: rgb(13, 100, 150);
  font-size: 12px;
  font-weight: 200;
  text-align: center;
}

p.card-text {
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: rgb(11, 11, 12);
  letter-spacing: 1px;
  text-align: center;
}

#featured {
  background-color: lighten(#7fdbff, 10%);
  /* border-radius: 5px;
	padding: 10px; */
}
</style>
