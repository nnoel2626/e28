export { default as Cart } from "./Cart";

export const axios = require("axios");

export const config = {
  api: process.env.VUE_APP_API_URL
  //api: "https://my-json-server.typicode.com/nnoel2626/e28-p3-api/"
};

export let store = {
  cartCount: 0
};
