<template>
	<div class="card">
		<div class="card-header">
			<h5 class="card-header-product-building">{{product.building }}</h5>
			<h6 class="product-room">{{ product.room }}</h6>
		</div>
		<div class="card-content">
			<div class="card-content-text">Make: {{ product.make }}</div>
			<div class="card-content-text">Model: {{ product.model }}</div>
			<div class="card-content-text">Mic Type: {{ product.mic_type }}</div>
			<!-- <p class="card-content">{{ product.group }}</p> -->
			<!-- <p class="card-content">{{ product.channel }}</p> -->
		</div>
		<div class="card-footer">
			<!-- <p class="product-model">{{ product.serial_number }}</p> -->
			<!-- <p class="product-freq_band">{{ product.freq_band }}</p> -->
			<!-- <p class="product-freq_range">{{ product.freq_range }}</p> -->
			<p class="product-assigned_frequency">AF: {{ product.assigned_frequency }}</p>
			<!-- <p class="product-assigned_frequency">{{ product.comments }}</p> -->
		</div>
	</div>
</template>


 <script>
export default {
	name: "ShowProduct",
	props: ["product"]
};
</script>

<style scoped>
</style>






