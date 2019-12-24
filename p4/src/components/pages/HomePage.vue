<template>
  <div>
    <div class="container">
      <div class="jumbotron">
        <h1 class="heading">Wireless Microphone App</h1>
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

.jumbotron {
  font-family: "Nunito", sans-serif;
  margin: 0;
  color: rgb(13, 100, 150);
  font-size: 16px;
  font-weight: 200;
  padding: 2rem 1rem;
  margin-bottom: 0.2rem;
  background-color: #eee563;
  border-radius: 0.3rem;
}
.mainContent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.data-v-75d4b3a9 .heading {
  color: white;
}
</style>
