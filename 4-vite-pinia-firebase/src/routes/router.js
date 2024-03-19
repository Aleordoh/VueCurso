import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/userStore";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

const requiereAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingSession = true //indica que la session se esta cargando para mostrar el snnipper (en APP)
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/login");
  }
  userStore.loadingSession = false //fin de la carga oculta el snipper (en App)
};

const routes = [
  { path: "/", component: Home, beforeEnter: requiereAuth },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
