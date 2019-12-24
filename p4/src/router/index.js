import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import ProductPage from "@/components/pages/ProductPage.vue";
import AddProductPage from "@/components/pages/AddProductPage.vue";
import CartPage from "@/components/pages/CartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage
  },
  {
    path: "/product/create",
    name: "create",
    component: AddProductPage
  },
  {
    path: "/product/:slug",
    component: ProductPage,
    name: "product",
    props: true
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesPage
  },

  {
    path: "/cart",
    name: "cart",
    component: CartPage
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
