import Vue from 'vue';
import Router from 'vue-router';

// Routable page components
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import ProductsPage from './components/pages/ProductsPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import AddProductPage from './components/pages/AddProductPage.vue';
import CartPage from './components/pages/CartPage.vue';
//   Child components

Vue.use(Router);

export default new Router({
    routes: [{
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
            name: 'cart',
            // beforeEnter: requireAuth
        },
        {
            path: '*',
            redirect: '/'
        }

    ],
    LinkActiveClass: 'Active',
    mode: 'history'

})