<template>
  <footer id="custom-footer">
    <div class="center">
      <span class="mr-4">&copy; 2019 Norcius Noel</span>
      <span class="mr-4">Privacy</span>
      <span>Terms of Service</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
footer#custom-footer {
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(41, 54, 20);
  height: 4rem;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  color: rgb(187, 181, 181);
  margin-top: 50px;
}
</style>
