import Vue from 'vue';
import Router from 'vue-router';


import LogIn from './components/LogIn.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import ShowProducts from './components/ShowProducts.vue';
import ShowProduct from './components/ShowProduct.vue';
import AddProduct from './components/AddProduct.vue';
import SearchProducts from './components/SearchProducts.vue';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/showProducts',
            name: 'showProducts',
            component: ShowProducts
        },
        {
            path: '/showProduct',
            name: 'showProduct',
            component: ShowProduct
        },
        {
            path: '/addProduct',
            name: 'addProduct',
            component: AddProduct
        },
        {
            path: '/searchProducts',
            name: 'searchProducts',
            component: SearchProducts
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: LogIn
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '*',
            redirect: '/'
        }

    ],

    LinkActiveClass: 'Active',
    mode: 'history'
})