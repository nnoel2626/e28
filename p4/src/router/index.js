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
    path: "/categories",
    name: "categories",
    component: CategoriesPage
  },

  {
    path: "/products",
    name: "products",
    component: ProductsPage
  },
  {
    path: "/product",
    name: "product",
    component: ProductPage
  },
  {
    path: "/addProduct",
    name: "addProduct",
    component: AddProductPage
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
  //{
  // path: "/about",
  // name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import( /* webpackChunkName: "about" */ "../views/About.vue")
  //}
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: routes
});

export default router;
