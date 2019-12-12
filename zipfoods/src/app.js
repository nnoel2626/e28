export {
    default as Cart
}
from './Carts';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/nnoel2626/e28-zipfoods-api/',

}

export let store = {
    cartCount: 0,

}