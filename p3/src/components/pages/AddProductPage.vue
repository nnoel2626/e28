<template>
	<div class="container">
		<div class="col-12">
			<div class="card textcenter mt-3">
				<div class="card-header bg-secondary text-white">
					<font-awesome-icon icon="plus" class="mr-3" />Add New Product
				</div>

				<div class="card-body">
					<form id="addProdForm" @submit.prevent="requestAdd">
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="building">Building</label>
							<div class="col-md-10">
								<input
									type="text"
									class="form-control"
									name="building"
									id="building"
									placeholder="building's name"
									v-model="formData.building"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="room">Room</label>
							<div class="col-md-8">
								<input
									type="text"
									class="form-control"
									id="room"
									placeholder="room name"
									v-model="formData.room"
								/>
							</div>
						</div>

						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="make">Make</label>
							<div class="col-md-8">
								<input
									type="make"
									class="form-control"
									name="make"
									id="make"
									placeholder="make"
									v-model="formData.make"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="model">Model</label>
							<div class="col-md-8">
								<input
									type="model"
									class="form-control"
									name="model"
									id="model"
									placeholder=" model"
									v-model="formData.model"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="micType">Microphone type</label>
							<div class="col-md-8">
								<input
									type="mic_type"
									class="form-control"
									name="mic_type"
									id="mic_type"
									placeholder="microphone type"
									v-model="formData.mic_type"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="group">Group</label>
							<div class="col-md-8">
								<input
									type="group"
									class="form-control"
									name="group"
									id="group"
									placeholder="group"
									v-model="formData.group"
								/>
							</div>
						</div>

						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="channel">Channel</label>
							<div class="col-md-8">
								<input
									type="channel"
									class="form-control"
									name="channel"
									id="channel"
									placeholder="channel"
									v-model="formData.channel"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="make">Serial Number</label>
							<div class="col-md-8">
								<input
									type="serial_number"
									class="form-control"
									name="serial_number"
									id="serial_number"
									placeholder="serial number"
									v-model="formData.serial_number"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="freq_band">Frequency Band</label>
							<div class="col-md-8">
								<input
									type="freq_band"
									class="form-control"
									name="freq_band"
									id="freq_band"
									placeholder="frequency band"
									v-model="formData.freq_band"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 col-form-label text-md-right" for="freque_range">Frequency Range</label>
							<div class="col-md-8">
								<input
									type="freque_range"
									class="form-control"
									name="freque_range"
									id="freque_range"
									placeholder="frequency range"
									v-model="formData.freq_range"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label
								class="col-md-2 col-form-label text-md-right"
								for="assigned_frequency"
							>Assigned Frequency</label>
							<div class="col-md-8">
								<input
									type="assigned_frequency"
									class="form-control"
									name="assigned_frequency"
									id="assigned_frequency"
									placeholder="Assigned frequency"
									v-model="formData.assigned_frequency"
								/>
							</div>
						</div>
						<div class="form-group form-row">
							<label class="col-md-2 text-md-right" for="comments">Product comments</label>
							<div class="col-md-10">
								<textarea
									class="form-control"
									rows="4"
									cols="50"
									name="comments"
									id="comments"
									placeholder="comments"
									v-model="formData.comments"
								></textarea>
							</div>
						</div>

						<div class="form-group form-row mb-0">
							<div class="offset-md-2 col-md-10">
								<button type="submit" class="btn btn-success d-block ml-auto">Add Product</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
	name: "AddProductPage",
	data() {
		return {
			formData: []
		};
	},
	components: {
		FontAwesomeIcon
	},
	methods: {
		requestAdd: function() {
			this.formData = {
				building: this.formData.building,
				room: this.formData.room,
				make: this.formData.make,
				model: this.formData.model,
				mic_type: this.formData.mic_type,
				group: this.formData.group,
				channel: this.formData.channel,
				serial_number: this.formData.serial_number,
				freq_band: this.formData.freq_band,
				freq_range: this.formData.freq_range,
				assigned_frequency: this.formData.assigned_frequency,
				comments: this.formData.comments
			};
			this.$emit("add", this.formData);
			this.formData = [];
		}
	}
};
</script>


<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>


	
	
