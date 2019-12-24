<template>
  <div>
    <div class="container">
      <h2>List of Wireless Microphones</h2>
      <div class="mainContent">
        <show-product
          v-for="product in products"
          :key="product.slug"
          :product="product"
        ></show-product>
      </div>
    </div>
  </div>
</template>
<script>
import ShowProduct from "./../ShowProduct.vue";

export default {
  name: "ProductsPage",
  components: {
    "show-product": ShowProduct
  },
  data: function() {
    return {
      //products: null,
    };
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  }
};
</script>
<style scoped="css">
.container {
  margin: 0 auto;
  text-align: center;
}
.searchBar {
  text-align: center;
}
.mainContent {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
}
input-group {
  align-items: stretch;
  width: 100%;
  margin: 20px;
}
div > h2 {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
