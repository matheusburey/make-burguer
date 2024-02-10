<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { GetIngredients, CreateNewOrder } from "@/api";

const toast = useToast();
const ingredients = GetIngredients();
const burgerForm = ref({
  name: "",
  bread: "",
  meat: "",
  opcionais: [],
})

async function submitBurgerOrder(e: any) {
  e.preventDefault();
  const data = {
    status: "Solicitado",
    ...burgerForm.value
  };
  CreateNewOrder(data);
  toast.success("Pedido adicionado com sucesso!");
}
</script>
<template>
  <div>
    <form @submit="submitBurgerOrder">
      <div class="container-input">
        <label for="name">Nome do cliente:</label>
        <input type="text" name="name" id="name" v-model="burgerForm.name" placeholder="Digite seu nome" />
      </div>
      <div class="container-input">
        <label for="bread">Escolha o pão:</label>
        <select name="bread" id="bread" v-model="burgerForm.bread">
          <option v-for="bread in ingredients.breads" :key="bread.id" :value="bread.type">
            {{ bread.type }}
          </option>
        </select>
      </div>
      <div class="container-input">
        <label for="meat">Escolha a carne:</label>
        <select name="meat" id="meat" v-model="burgerForm.meat">
          <option v-for="meat in ingredients.meat" :key="meat.id" :value="meat.type">
            {{ meat.type }}
          </option>
        </select>
      </div>
      <div class="container-input optional">
        <label for="optional">Selecione os Opcionais:</label>
        <div v-for="option in ingredients.optional" :key="option.id" class="checkbox">
          <input type="checkbox" :name="option.type" v-model="burgerForm.opcionais" :value="option.type" />
          <span>{{ option.type }}</span>
        </div>
      </div>
      <button type="submit">Cria Burger</button>
    </form>
  </div>
</template>
<style scoped>
form {
  max-width: 300px;
  margin: auto;
}

.container-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
}

.optional {
  flex-direction: row;
  flex-wrap: wrap;
}

.checkbox {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox span {
  margin-left: 6px;
  font-weight: bold;
}

button {
  display: block;
  width: 100%;
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

button:hover {
  opacity: 0.8;
}
</style>
