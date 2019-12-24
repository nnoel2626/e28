import Vue from "vue";
import Vuex from "vuex";
//export const axios = require("axios");
import _ from "lodash";
import * as app from "./../app.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartCount: 0,
    products: null,
    // product: {},
    searchTerms: "",
    filterKey: "building",
    filterDir: "asc",
    filteredProducts: null
  },
  mutations: {
    setCartCount(state, payload) {
      state.cartCount = payload;
    },

    updateCartCount(state, payload) {
      state.cartCount += payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    addProduct(state, payload) {
      _.merge(state.products, payload);
    },

    // setProduct(state, product) {
    //   state.product = product;
    // },
    filteredProducts(state, word) {
      if (!word || word === "{}") {
        state.searchTerms = null;
        state.filteredProducts = null;
      } else {
        state.searchTerms = word;
        word = word.trim().toLowerCase();
        state.filteredProducts = state.products.filter(product => {
          return (
            product.slug.toLowerCase().includes(word) ||
            product.building.toLowerCase().includes(word) ||
            product.room.toLowerCase().includes(word)
          );
        });
      }
    }
  },

  actions: {
    setProducts(context) {
      app.axios.get(app.config.api + "products.json").then(response => {
        context.commit("setProducts", response.data);
      });
    },
    setProduct({ commit }, product) {
      commit("setProduct", product);
    },
    filteredProducts({ commit }, word) {
      commit(" filteredProducts", word);
    }
  },

  getters: {
    getSearchWord: state => state.searchWord,
    getFilteredProduct: state => state.filteredProducts,
    // https://vuex.vuejs.org/guide/getters.html#method-style-access
    getProductBySlug(state) {
      return function(slug) {
        return _.find(state.products, {
          slug: slug
        });
      };
    }
  }
  // modules: {}
});
