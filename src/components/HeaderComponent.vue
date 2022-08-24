<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="/img/logo.png" alt="Make Your Burger" />
    </RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pedidos">Pedidos</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
}

a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

a:hover {
  color: #fff;
}
</style>
