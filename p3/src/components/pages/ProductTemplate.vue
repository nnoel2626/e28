<template>
  <div class="results">
    <h1>Results</h1>
    <ul>
      <li v-for="product in products" :key="product.Vehicle.id">
        <img v-bind:src="product.Vehicle.Url">
        <div>
          <h3>
            {{ product.Vehicle.Manufacturer }}
            {{ product.Vehicle.Model }}
          </h3>
         <h3>

            <router-link
            :to="'./Vehicle/'+product.Vehicle.id"
            @input="setActiveProduct" 
            :value="$store.state.activeProduct"
            ><button>More</button></router-link>

          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

 <script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Results',
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'products',
      'activeProduct'
    ])
  },
  methods: {
     ...mapMutations([
      'setActiveProduct'
   ]),
    setActiveProduct(val) {
      this.$store.commit('setActiveProduct', val)
    }
  }
};
 </script>

   <!-- <template>
 <div class="Vehicle">
  <h1>Vehicle</h1>
   <pre>store.$state.activeProduct: {{ $store.state.activeProduct }}</pre>

  {{ activeProduct.Vehicle.Manufacturer }}
    {{ activeProduct.Vehicle.Model }}

  </div>
</template> -->


// <script>
//  import { mapState, mapMutations } from 'vuex'

//  export default {
//    name: 'Vehicle',
//    data() {
//      return {
//        product: this.$store.getters.productById(this.$route.params['id'])
//      }
//    },
//   computed: {
//     ...mapState([
//       'products',
//       'activeProduct'
//    ]),
//     store() {
//       return this.$store.state
//     }
//   }
// }
// </script>

/ computed: {
	// 	categories: function() {
	// 		let categories = this.products.map(product => product.categories);
	// 		let mergedCategories = [].concat.apply([], categories);
	// 		// Return unique, sorted categories
	// 		return [...new Set(mergedCategories)].sort();
	// 	}
	// },
