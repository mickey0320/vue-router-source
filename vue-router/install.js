import RouterLink from "./components/router-link";
import RouterView from "./components/router-view";

export let Vue;
function install(_Vue) {
  Vue = _Vue;

  Vue.component("router-link", RouterLink);
  Vue.component("router-view", RouterView);

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router._init(this);

        Vue.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
    },
  });
  Object.defineProperty(Vue.prototype, "$route", {
    get() {
      return this._routerRoot._route;
    },
  });
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    },
  });
}

export default install;
