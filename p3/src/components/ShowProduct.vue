<template>
	<div class="card">
		<router-link :to="{ name: 'product', params: {'id' : product.id }}">
			<div class="card-header">
				<h5 class="card-header-product-building">{{product.building }}</h5>
				<h6 class="product-room">{{ product.room }}</h6>
			</div>
			<div class="card-content">
				<div class="card-content-text">Make: {{ product.make }}</div>
				<div class="card-content-text">Model: {{ product.model }}</div>
				<div class="card-content-text">Mic Type: {{ product.mic_type }}</div>
			</div>
			<div class="card-footer">
				<p class="product-assigned_frequency">AF: {{ product.assigned_frequency }}</p>
			</div>
		</router-link>
	</div>
</template>

 <script>
export default {
	name: "ShowProduct",
	props: ["product"]
};
</script>

<style scoped>
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






