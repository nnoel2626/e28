<template>
	<div class="container searchProducts">
		<b-input-group>
			<b-form-input
				id="SearchProds"
				placeholder="Search Products by model"
				type="text"
				class="form-control"
				aria-label="Search Products"
				v-model="searchTerm"
			/>
		</b-input-group>
	</div>
</template>

<script>

import * as app from "./../app.js";

export default {
	name: "SearchProducts",
	//props: ["products"],
	components: {
		//FontAwesomeIcon
	},
	data() {
		return {
			sharedState: app.store,
			searchTerm: ""
		};
	},

	watch: {
		searchTerm: function() {
			this.$emit("searchRecords", this.searchTerm);
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

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
</style>

