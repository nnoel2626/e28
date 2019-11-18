<template>
	<div class="container">
		<b-input-group>
			<b-form-input
				id="SearchProds"
				placeholder="Search"
				type="text"
				class="form-control"
				aria-label="Search Products"
				v-model="searchTerm"
			/>
			<b-input-group-append>
				<b-dropdown id="dropdown-menu" text="Sort By">
					<b-dropdown-item
						d-flex
						justify-content-between
						id="building"
						@click="$emit('requestKey', 'building')"
					>Building</b-dropdown-item>

					<b-dropdown-item
						d-flex
						justify-content-between
						id="room"
						@click="$emit('requestKey', 'room')"
					>Room</b-dropdown-item>

					<b-dropdown-item
						d-flex
						justify-content-between
						href="#"
						id="assigned_frequency"
						@click="$emit('requestKey', 'assigned_frequency')"
					>Assigned Frequency</b-dropdown-item>

					<b-dropdown-divider></b-dropdown-divider>

					<b-dropdown-item
						d-flex
						justify-content-between
						href="#"
						id="asc"
						@click="$emit('requestDir', 'asc')"
					>Asc</b-dropdown-item>

					<b-dropdown-item
						d-flex
						justify-content-between
						href="#"
						id="desc"
						@click="$emit('requestDir', 'desc')"
					>Desc</b-dropdown-item>
				</b-dropdown>
			</b-input-group-append>
		</b-input-group>
	</div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import * as app from "./../app.js";

export default {
	name: "SearchProducts",

	components: {
		// FontAwesomeIcon
	},
	
	props: ["myKey", "myDir"],

	data() {
		return {
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

