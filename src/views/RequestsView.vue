<script setup lang="ts">
import { ref } from "vue";
import { GetOrders, DeleteOrder } from "@/api";
const orders = ref<any[]>(GetOrders());

const showOrder = (orderData: any) => {
  console.log(orderData, orderData.opcionais);
}

const deleteOrder = (orderId: number) => {
  DeleteOrder(orderId);
  orders.value = GetOrders();
}
</script>
<template>
  <div class="container">
    <h1>Gerenciar Pedidos</h1>
    <table>
      <thead>
        <tr>
          <th>#:</th>
          <th>Status:</th>
          <th class="large-cell">Cliente:</th>
          <th class="large-cell">Pão:</th>
          <th>Carne:</th>
          <th>Opcionais:</th>
          <th colspan="2">opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{order.id}}</td>
          <td>{{order.status}}</td>
          <td>{{order.name}}</td>
          <td>{{order.bread}}</td>
          <td>{{order.meat}}</td>
          <td>
            <ul>
              <li v-for="optional in order.opcionais" :key="optional">{{optional}}</li>
            </ul>
          </td>
          <td>
            <button @click="deleteOrder(order.id)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
th, td {
  padding: 15px;
  text-align: left;
}

th {
  border-collapse: collapse;
  border-bottom: 5px solid #ddd;
}

tr:nth-child(even) {
  background-color: lightgray;
}

.large-cell {
  width: 25%;
}
</style>
