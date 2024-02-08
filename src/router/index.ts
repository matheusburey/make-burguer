import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RequestsView from "../views/RequestsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView},
    { path: "/pedidos", component: RequestsView },
  ],
});

export default router;
