import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("@/views/Product.vue"),
  },
  {
    path: "/Hegoze",
    name: "Hegoze",
    component: () => import("@/views/Hegoze.vue"),
    children: [
      {
        path: "aboutHegoze",
        name: "AboutHegoze",
        component: () => import("@/views/AboutHegoze.vue"),

      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
});

export default router;
