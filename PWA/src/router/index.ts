import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home.vue"),
  },
  {
    path: "/Login",
    name: "Login ",
    component: () => import("@views/Login/Login.vue"),
  },
  {
    path: "/Counter",
    name: "Counter ",
    component: () => import("@views/Counter/Counter.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
