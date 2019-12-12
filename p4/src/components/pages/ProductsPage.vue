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
    //"search-products": SearchProducts
  },
  data: function() {
    return {
      //	searchQuery: "",
    };
  },

  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  // computed: {
  //   ...mapState(["products"])
  // },

  // created() {
  //   this.$store.dispatch("fetchProducts");
  // },

  methods: {
    searchRecords: function(terms) {
      this.searchTerms = terms;
    }
  }
};
</script>
<style scoped="css">
.container {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
}
.mainContent {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  color: #382e2e;
  margin-top: 30px;
  margin-bottom: 30px;
}
div.row {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-header {
  background-color: #eee563;
}
div.card {
  width: 23%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-bottom: 15px;
}
div.card-header {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: left;
  justify-content: space-between;
  flex: 1 0 auto;
}

h4.card-header-title {
  /* padding-left: 15px; */
  margin: 0;
  color: white;
  /* line-height: 45px; */
  font-weight: 200;
}
h5.card-header-title {
  margin: 0;
  color: white;

  font-weight: 200;
}
div.card-content {
  padding: 15 px;
  flex: 1 0 auto;
}
div.card-content-text {
  font-family: "Nunito", sans-serif;
  font-size: 11px;
  font-weight: 300;
  color: #3d5358;
  margin: 0 auto;
  margin: 29px;
  color: white;
  letter-spacing: 1px;
}
div.card-footer {
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
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
