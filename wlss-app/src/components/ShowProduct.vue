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
		</div>
		<div class="card-footer">
			<p class="product-assigned_frequency">AF: {{ product.assigned_frequency }}</p>
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
input-group {
	align-items: stretch;
	width: 100%;
	margin: 20px;
}
div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}
</style>






