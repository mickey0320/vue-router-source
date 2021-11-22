import Vue from "vue";
import App from "./App.vue";

import router from "./router";

new Vue({
  render(h) {
    return h(App);
  },
  router,
}).$mount("#app");
