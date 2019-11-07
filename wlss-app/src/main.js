import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import './wirelessListArray.js';
import LogIn from './components/LogIn.vue';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import ShowProducts from './components/ShowProducts.vue';
import ShowProduct from './components/ShowProduct.vue';
import AddProduct from './components/AddProduct.vue';
import SearchProducts from './components/SearchProducts.vue';


import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faTrash,
  faCheck
} from "@fortawesome/free-solid-svg-icons"
library.add(faPlus, faMinus, faTrash, faCheck);


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueLodash from 'vue-lodash';
Vue.use(VueLodash);
// import './assets/css/app.scss';


Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [{
    path: '/users',
    component: Users
  },
  {
    path: '/showProducts',
    component: ShowProducts
  },
  {
    path: '/showProduct',
    component: ShowProduct
  },
  {
    path: '/addProduct',
    component: AddProduct
  },
  {
    path: '/searchProducts',
    component: SearchProducts
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component: LogIn
  },

];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')