import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";
///---------- Style----------->
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/css/style.css";
import "bootstrap";

import Vuelidate from "vuelidate";

/* eslint-disable no-unused-vars */
const _ = require("lodash");
/* eslint-enable no-unused-vars */

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
