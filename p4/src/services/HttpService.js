import store from '../store';
import axios from 'axios';

export const axios = require('axios');

// export const config = {
//     api: 'https://my-json-server.typicode.com/nnoel2626/e28-zipfoods-api/',
// }

const apiUrl = 'https://my-json-server.typicode.com/nnoel2626/e28-p3-api/',


    // Creates a global http method to use for making request to the server
    export function http() {
        return axios.create({
            baseURL: store.state.apiUrl,
            headers: {
                Authorization: auth.getToken()
            }
        });
        //  return axios.create({
        //      baseURL: store.state.apiUrl,
        //      headers: {
        //          Authorization: auth.getToken()
        //      }
        //  });


        // return axios({
        //      baseURL: 'https://dog.ceo/api/breeds/list/all',
        //     method: 'get',
        //     data: {
        //         foo: 'bar'
        //     }
        // });
    }