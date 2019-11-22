<template>
	<div>
		<div class="container">
			<h2>List of Wireless Microphones</h2>
			<search-products
				@searchRecords="searchProds"
				:myKey="filterKey"
				:myDir="filterDir"
				@requestKey="changeKey"
				@requestDir="changeDir"
			/>

			<div class="mainContent">
				<div v-for="product in products" :key="product.id">
					<show-product :product="product"></show-product>
				</div>
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
		ShowProduct,
		SearchProducts
	},
	data: function() {
		return {
			products: null,
			searchedProducts: null,
			searchTerms: "",
			filterKey: "model",
			filterDir: "asc",
			productIndex: 0
		};
	},
	mounted() {
		this.products = app.axios.get(app.config.api + "products").then(
			response =>
				(this.products = response.data.map(item => {
					//this.products = response.data;
					item.productId = this.productIndex;
					this.productIndex++;
					return item;
					//searchedProducts = response.data;
				}))
		);
	},
	methods: {
		searchProds: function() {
			return this.products.filter(item => {
				return (
					item.building.toLowerCase().match(this.searchTerms.toLowerCase()) ||
					item.room.toLowerCase().match(this.searchTerms.toLowerCase()) ||
					item.assigned_freq.toLowerCase().match(this.searchTerms.toLowerCase())
				);
			});
		},

		searchProducts: function(terms) {
			this.searchTerms = terms;
		},
		changeKey: function(value) {
			this.filterKey = value;
		},
		changeDir: function(value) {
			this.filterDir = value;
		}
	}
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
