<template>
	<div>
		<div class="container">
			<h2>List of Wireless Microphones</h2>
			<search-products @searchRecords="searchRecords"/>
			<div class="mainContent">
            <show-product v-for="product in products" :key="product.id" :product="product"></show-product>
			</div>
		</div>
	</div>
</template>

<script>
import * as app from "./../../app.js";
import ShowProduct from "./../ShowProduct.vue";
import SearchProducts from "./../SearchProducts";
//import _ from "lodash";

export default {
	name: "ProductsPage",
	components: {
		'show-product':	ShowProduct,
		'search-products':SearchProducts
	},
	data: function() {
		return {
		sharedState: app.store,		
		searchTerms: "",
		product:"",
		products:"",
		filterKey: "model",
		filterDir: "asc",	  
		}
	},

	mounted() {
		app.axios.get(app.config.api + "products")
		.then(response => {
			this.products = response.data;
			//this.searchedProdducts();
		});
	},


	methods:{
		searchRecords: function(terms) {
			this.searchTerms = terms;
		}
	},

	computed: {
		searchedProds: function () {
			return this.products.filter( function(product) {
				return (product.model.toLowerCase().includes(this.searchTerms.toLowerCase()))
			})
		},

	},


};
</script>


<style scoped>
.container {
	display: flex;
	align-items: space-between;
	justify-content: space-between;
	flex-wrap: wrap;
}
.mainContent {
	display: flex;
	align-items: space-between;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
}
div.row {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
}
div.card {
	width: 23%;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	padding: 15px;
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	margin-bottom: 15px;
}
div.card-header {
	display: flex;
	width: 100%;
	height: 40px;
	/* max-height: 50px; */
	align-items: left;
	justify-content: space-between;
	flex: 1 0 auto;
}
h4.card-header-title {
	/* padding-left: 15px; */
	margin: 0;
	color: white;
	/* line-height: 45px; */
	font-weight: 200;
}
h5.card-header-title {
	/* padding-left: 25px; */
	margin: 0;
	color: white;
	/* line-height: 65px; */
	font-weight: 200;
}
div.card-content {
	padding: 15 px;
	flex: 1 0 auto;
}
div.card-content-text {
	font-family: "Nunito", sans-serif;
	font-size: 11px;
	font-weight: 300;
	color: #3d5358;
	margin: 0 auto;
	margin: 29px;
	color: white;
	letter-spacing: 1px;
}
div.card-footer {
	display: flex;
	justify-content: flex-end;
	flex-shrink: 0;
}
input-group {
	align-items: stretch;
	width: 100%;
	margin: 20px;
}
div > h2 {
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 30px;
}
</style>



	// mounted() {
	// 	this.products = app.axios.get(app.config.api + "products").then(
	// 		response =>
	// 			(this.products = response.data.map(item => {
	// 				//this.products = response.data;
	// 				item.productId = this.productIndex;
	// 				this.productIndex++;
	// 				return item;
	// 				//searchedProducts = response.data;
	// 			}))
	// 	);
	// },



	// computed: {
	// 	searchProds: function() {
	// 		return this.products.filter(item => {
	// 			return (
	// 				item.building.toLowerCase().match(this.searchTerms.toLowerCase()) ||
	// 				item.room.toLowerCase().match(this.searchTerms.toLowerCase()) ||
	// 				item.assigned_freq.toLowerCase().match(this.searchTerms.toLowerCase())
	// 			).bind(this);
	// 		})
	// 	},

	// },
