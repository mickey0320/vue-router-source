import Vue from "vue";
import VueRouter from "../vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "a",
        component: {
          render: (h) => h("div", "about a"),
        },
      },
      {
        path: "b",
        component: {
          render: (h) => h("div", "about b"),
        },
      },
    ],
  },
];

Vue.use(VueRouter);

export default new VueRouter({
  routes,
});
