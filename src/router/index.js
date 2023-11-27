import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import Overlay from "@/views/overlayPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/overlay/:id", // Dynamic route with parameter ":id"
    name: "overlay",
    component: Overlay,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
