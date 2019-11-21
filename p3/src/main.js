import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



import HomePage from "@/components/pages/HomePage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import ProductPage from "@/components/pages/ProductPage.vue";
import AddProductPage from "@/components/pages/AddProductPage.vue";
import CartPage from "@/components/pages/CartPage.vue";

//import './style.css'
//import './p3.scss'


Vue.use(BootstrapVue)

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage,
    //beforeEnter: requireAuth
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesPage,
    //beforeEnter: requireAuth
  },
  {
    path: '/productList',
    name: 'products',
    component: ProductsPage,
    //beforeEnter: requireAuth
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage,
    props: true
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProductPage,
    // beforeEnter: requireAuth
  },
  {
    path: '/cart',
    component: CartPage,
    name: 'rentalCart',
    // beforeEnter: requireAuth
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  // LinkActiveClass: 'Active'
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')