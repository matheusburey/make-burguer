<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
}

.container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
