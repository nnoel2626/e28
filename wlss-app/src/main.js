import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';

import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import VueLodash from 'vue-lodash';


import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faTrash,
  faCheck
} from "@fortawesome/free-solid-svg-icons"
library.add(faPlus, faMinus, faTrash, faCheck);


Vue.use(VueLodash);
// import './assets/css/app.scss';

Vue.use(BootstrapVue);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')