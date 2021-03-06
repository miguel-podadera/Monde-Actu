import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import actus from "../views/actus.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },

  {
    path: "/actus",
    name: "actus",
    component: actus
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
