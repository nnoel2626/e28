<template>
  <div class="container">
    <div class="col-12">
      <div class="card textcenter mt-3">
        <div class="card-header bg-header text-white">
          <span class="glyphicon glyphicon-plus"></span>Add New Product
        </div>
        <div class="card-body">
          <form id="addProdForm" @submit.prevent="requestAdd">
            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="name"
                >URl</label
              >
              <div class="col-md-8">
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'form-input-error': $v.product.slug.$error }"
                  id="slug"
                  data-test="product-slug-input"
                  v-model="$v.product.slug.$model"
                />
                <div v-if="$v.product.slug.$error">
                  <div
                    class="form-feedback-error"
                    v-if="!$v.product.slug.required"
                  >
                    Product URL is required.
                  </div>
                  <div
                    class="form-feedback-error"
                    v-else-if="!$v.product.slug.minLength"
                  >
                    Product URL must be at least 4 characters long.
                  </div>
                  <div
                    class="form-feedback-error"
                    v-else-if="!$v.product.slug.doesNotExist"
                  >
                    This URL is not available.
                  </div>
                  <small class="form-help">Min: 4</small>
                </div>
              </div>
            </div>
            <div class="form-group form-row">
              <label
                class="col-md-2 col-form-label text-md-right"
                for="building"
                >Building</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-building-input"
                  class="form-control"
                  type="text"
                  :class="{ 'form-input-error': $v.product.building.$error }"
                  name="building"
                  id="building"
                  v-model="$v.product.building.$model"
                />
                <div v-if="$v.product.building.$error">
                  <div
                    class="form-feedback-error"
                    v-if="!$v.product.buiding.required"
                  >
                    building is required.
                  </div>
                  <div
                    class="form-feedback-error"
                    v-else-if="!$v.product.building.minLength"
                  >
                    Product URL must be at least 4 characters long.
                  </div>
                  <div
                    class="form-feedback-error"
                    v-else-if="!$v.product.building.doesNotExist"
                  >
                    This URL is not available.
                  </div>
                  <small class="form-help">Min: 4</small>
                </div>
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="room"
                >Room</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-room-input"
                  type="text"
                  class="form-control"
                  id="room"
                  placeholder="room name"
                  v-model="product.room"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="make"
                >Make</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-make-input"
                  type="make"
                  class="form-control"
                  name="make"
                  id="make"
                  placeholder="make"
                  v-model="product.make"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="model"
                >Model</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-model-input"
                  type="model"
                  class="form-control"
                  name="model"
                  id="model"
                  placeholder=" model"
                  v-model="product.model"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="micType"
                >Microphone type</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-mic_type-input"
                  type="mic_type"
                  class="form-control"
                  name="mic_type"
                  id="mic_type"
                  placeholder="microphone type"
                  v-model="product.mic_type"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="group"
                >Group</label
              >
              <div class="col-md-8">
                <input
                  type="group"
                  class="form-control"
                  name="group"
                  id="group"
                  placeholder="group"
                  v-model="product.group"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="channel"
                >Channel</label
              >
              <div class="col-md-8">
                <input
                  type="channel"
                  class="form-control"
                  name="channel"
                  id="channel"
                  placeholder="channel"
                  v-model="product.channel"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="make"
                >Serial Number</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-serial_number-input"
                  type="serial_number"
                  class="form-control"
                  name="serial_number"
                  id="serial_number"
                  placeholder="serial number"
                  v-model="product.serial_number"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label
                class="col-md-2 col-form-label text-md-right"
                for="freq_band"
                >Frequency Band</label
              >
              <div class="col-md-8">
                <input
                  type="freq_band"
                  class="form-control"
                  name="freq_band"
                  id="freq_band"
                  placeholder="frequency band"
                  v-model="product.freq_band"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label
                class="col-md-2 col-form-label text-md-right"
                for="freque_range"
                >Frequency Range</label
              >
              <div class="col-md-8">
                <input
                  type="freque_range"
                  class="form-control"
                  name="freque_range"
                  id="freque_range"
                  placeholder="frequency range"
                  v-model="product.freq_range"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label
                class="col-md-2 col-form-label text-md-right"
                for="assigned_frequency"
                >Assigned Frequency</label
              >
              <div class="col-md-8">
                <input
                  data-test="product-assigned_freq-input"
                  type="assigned_frequency"
                  class="form-control"
                  name="assigned_frequency"
                  id="assigned_frequency"
                  placeholder="Assigned frequency"
                  v-model="product.assigned_freq"
                />
              </div>
            </div>
            <div class="form-group form-row">
              <label class="col-md-2 text-md-right" for="comments"
                >Product comments</label
              >
              <div class="col-md-6">
                <textarea
                  class="form-control"
                  rows="4"
                  cols="50"
                  name="comments"
                  id="comments"
                  placeholder="comments"
                  v-model="product.comments"
                ></textarea>
              </div>
            </div>

            <div class="form-group form-row mb-0">
              <div class="offset-md-2 col-md-10">
                <button
                  data-test="add-product-button"
                  type="submit"
                  class="btn btn-success d-block ml-auto"
                >
                  Add Product
                </button>
              </div>

              <div class="form-feedback-error" v-if="formHasErrors">
                Please correct the above errors
              </div>
            </div>
          </form>
        </div>
      </div>
      <transition name="fade">
        <div class="alert" v-if="addAlert">Your product has been updated!</div>
      </transition>
    </div>
  </div>
</template>

<script>
import * as app from "./../../app.js";

import { required, minLength } from "vuelidate/lib/validators";

let product = {};
// If in dev mode, we'll pre-fill the product to make demo/testing easier
if (process.env.NODE_ENV == "development") {
  product = {
    slug: "Carpenter-center-theater-4",
    categories: ["installedMic"],
    building: "Carpenter Center",
    room: "Theater",
    make: "Shure",
    model: "ULX P4",
    mic_type: "HandHeld # 3",
    freq_range: "554 - 590 MHZ",
    freq_band: "J1",
    group: "G2",
    channel: "CH19",
    Assigned_freq: "588.800 MHz",
    serial_number: "",
    comments: ""
  };
} else {
  product = {
    slug: "",
    categories: [],
    building: "",
    room: "",
    make: "",
    model: "",
    mic_type: "",
    group: "",
    channel: "",
    serial_number: "",
    freq_band: "",
    freq_range: "",
    assigned_frequency: "",
    comments: ""
  };
}
export default {
  name: "AddProductPage",
  data() {
    return {
      product: product,
      formHasErrors: false,
      addAlert: false
    };
  },
  validations: {
    product: {
      slug: {
        required,
        minLength: minLength(4),
        doesNotExist(value) {
          return !this.$store.getters.getProductBySlug(value);
        }
      },
      building: {
        required
      },
      room: {
        required
      },
      model: {
        required
      }
    }
  },
  watch: {
    "$v.$anyError": function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    requestAdd: function() {
      if (!this.formHasErrors) {
        // Axios request to the server to persist the new product
        app.axios
          .post(app.config.api + "products.json", this.product)
          .then(response => {
            let key = response.data.name;
            this.$store.commit("addProduct", {
              [key]: this.product
            });
            this.$router.push({
              name: "product",
              params: { slug: this.product.slug }
            });
            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 3000);
          });
      }
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
.bg-header {
  background-color: #eee563;
}
.text-white {
  color: #212529;
}
.alert {
  margin: 0 auto;
  width: 40%;
  text-align: center;
  background-color: #93c5d8;
}
</style>
