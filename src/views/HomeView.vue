<script setup lang="ts">
import FormComponent from "../components/FormComponent.vue";
</script>

<template>
  <div id="banner">
    <h1>Make Your Burger</h1>
  </div>
  <main class="container">
    <h1>Monte o seu burger:</h1>
    <FormComponent />
  </main>
</template>

<style scoped>
#banner {
  height: 500px;
  background-image: url("/img/burger.jpg");
  background-position: 0 -250px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#banner h1 {
  color: #fff;
  font-size: 60px;
  padding-left: 40px;
}
</style>
