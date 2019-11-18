import Vue from 'vue';
import Router from 'vue-router';

// Routable page components
import LogInPage from './components/pages/LogInPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';
import HomePage from './components/pages/HomePage.vue';
import UsersPage from './components/pages/UsersPage.vue';
import ProductsPage from './components/pages/ProductsPage.vue';
import ProductDetailsPage from './components/pages/ProductDetailsPage.vue';
import AddProductPage from './components/pages/AddProductPage.vue';

//   Child components
import ShowProduct from './components/ShowProduct.vue';
import SearchProducts from './components/SearchProducts.vue';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/users',
            name: 'users',
            component: UsersPage
        },
        {
            path: '/showProducts',
            name: 'productList',
            component: ProductsPage
        },
        {
            path: '/showProduct',
            name: 'showProduct',
            component: ShowProduct
        },
        {
            path: '/product/id',
            name: 'pruductDetails',
            component: ProductDetailsPage
        },
        {
            path: '/addProduct',
            name: 'addProduct',
            component: AddProductPage
        },
        {
            path: '/searchProducts',
            name: 'searchProducts',
            component: SearchProducts
        },
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/login',
            name: 'login',
            component: LogInPage
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage
        },
        {
            path: '*',
            redirect: '/'
        }

    ],

    LinkActiveClass: 'Active',
    mode: 'history'
})