import History from "./base";

const ensureSlash = () => {
  if (window.location.hash) {
    return;
  }
  window.location.hash = "/";
};
class HashHistory extends History {
  constructor(router) {
    super();
    this.router = router;

    ensureSlash();
  }
  getCurrentLocation() {
    return window.location.hash.slice(1);
  }
  setupListener() {
    window.onhashchange = () => {
      this.transitionTo(this.getCurrentLocation());
    };
  }
  push(location) {
    window.location.hash = location;
  }
}

export default HashHistory;
