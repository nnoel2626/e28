<template>
  <div>
    <div class="container">
      <h2>Categories</h2>
      <ul class="cleanList">
        <li
          data-test="category-name"
          v-for="(category, id) in categories"
          :key="id"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "CategoriesPage",
  data: function() {
    return {};
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }, // Load categories via a computed property; because it depends on `products`
    // it will reactively be loaded once `products` is ready
    categories: function() {
      let categories = _.map(this.products, "categories");
      let mergedCategories = [].concat.apply([], categories);
      // Return unique, sorted categories
      return [...new Set(mergedCategories)].sort();
    }

    // categories: function() {
    //   let categories = this.products.map(product => product.categories);
    //   let mergedCategories = [].concat.apply([], categories);
    //   return [...new Set(mergedCategories)].sort();
    // }
  }
};
</script>

<style scoped></style>
© 2019 GitHub, Inc.

<style scoped>
.container {
  text-align: center;
  list-style-type: none;
}
ul {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #eee563;
  border-radius: 0.3rem;
}
div > h2 {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.cleanList,
data-v-34a429a6 {
  margin: 0 auto;
  text-transform: uppercase;
  list-style-type: none;
  padding: 0;
}
</style>
