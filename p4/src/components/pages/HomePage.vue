<template>
  <div>
    <div class="container">
      <div class="jumbotron">
        <h3 class="heading">Wireless Microphone App</h3>
        <h4 class="subHeading">
          This App will make it easier to find wireless by building locations
        </h4>
        <hr class="my-4" />
        <p>User needs to register or sign-in in order to use this app!</p>
        <button variant="primary" href="#">Login</button>
        <button variant="success" href="#">Register</button>
      </div>
      <div class="mainContent">
        <show-featured :category="featuredCategory"></show-featured>
      </div>
    </div>
  </div>
</template>

<script>
//import * as app from "./../../app.js";
import ShowFeatured from "./../ShowFeatured.vue";
export default {
  name: "HomePage",
  components: {
    ShowFeatured
  },
  data: function() {
    return {
      featuredCategory: "installedMic"
    };
  }
};
</script>
<style scoped="css">
.container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}
.mainContent {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e4d60f;
  border-radius: 0.3rem;
}
data-v-75d4b3a9 .heading {
  color: white;
}
</style>
