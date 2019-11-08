<template>
	<div class="container">
		<h2>List of Wireless Microphones</h2>

		<search-products
			@searchRecords="searchProducts"
			:myKey="filterKey"
			:myDir="filterDir"
			@requestKey="changeKey"
			@requestDir="changeDir"
		/>
		<br />

		<show-product v-for="product in filteredProds" :key="product.id" :product="product"></show-product>
	</div>
</template>

<script>
import SearchProducts from "./SearchProducts";
import ShowProduct from "./ShowProduct.vue";
import { products } from "./../wirelessListArray.js";
import _ from "lodash";


export default {
	name: "ShowProducts",
	components: {
		ShowProduct,
		SearchProducts
		
	},

	data: function() {
		return {
			products: products,
			filterKey: "building",
			filterDir: "asc",
			searchTerms: ""
		};
	},
	computed: {
		searchedProds: function() {
			return this.products.filter(item => {
				return (
					item.building.toLowerCase().match(this.searchTerms.toLowerCase()) ||
					item.room.toLowerCase().match(this.searchTerms.toLowerCase()) ||
					item.assigned_frequency
						.toLowerCase()
						.match(this.searchTerms.toLowerCase())
				);
			});
		},
		filteredProds: function() {
			return _.orderBy(
				this.searchedProds,
				item => {
					return item[this.filterKey].toLowerCase();
				},
				this.filterDir
			);
		}
	},
	methods: {
		changeKey: function(value) {
			this.filterKey = value;
		},
		changeDir: function(value) {
			this.filterDir = value;
		},
		searchProducts: function(terms) {
			this.searchTerms = terms;
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
.input-group {
	align-items: stretch;
	width: 100%;
	margin: 20px;
}
div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
</style>