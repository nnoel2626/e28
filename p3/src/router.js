import Vue from 'vue';
import Router from 'vue-router';

// Routable page components
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import ProductsPage from './components/pages/ProductsPage.vue';
import ProductDetailsPage from './components/pages/ProductDetailsPage.vue';
import AddProductPage from './components/pages/AddProductPage.vue';
import CartPage from './components/pages/CartPage.vue';
//   Child components


Vue.use(Router);

// function dynamicPropsFn(route) {
//     const now = new Date()
//     return {
//         name: (now.getFullYear() + parseInt(route.params.years)) + '!'
//     }
// }



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
            component: ProductDetailsPage,
            // custom logic for mapping between route and props
            props: (route) => ({
                ...route.params
            })
            //props: dynamicPropsFn


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

        // {
        //     path: '/logout',
        //     beforeEnter(to, from, next) {
        //         auth.logout()
        //         next('/')
        //     }
        // },
        {
            path: '*',
            redirect: '/'
        }

    ],
    LinkActiveClass: 'Active',
    mode: 'history'

})



// props: (route) => ({
//query: route.query.q
//})
// props: true,
// component: require('./components/pages/ProductDetailsPage').default
//beforeEnter: requireAuth