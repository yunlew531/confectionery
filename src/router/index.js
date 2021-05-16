import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Product.vue"),
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("@/components/Header.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
