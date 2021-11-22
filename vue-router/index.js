import createMatcher from "./create-matcher";
import HashHistory from "./history/hashHistory";
import BrowserHistory from "./history/browserHistory";
import install from "./install";

class VueRouter {
  constructor({ routes, mode = "hash" }) {
    this.matcher = createMatcher(routes);
    switch (mode) {
      case "hash":
        this.history = new HashHistory(this);
        break;
      case "history":
        this.history = new BrowserHistory(this);
        break;
    }
  }
  match(location) {
    return this.matcher.match(location);
  }
  _init(app) {
    const history = this.history;
    history.transitionTo(history.getCurrentLocation(), () => {
      history.setupListener();
    });
    history.listen((route) => {
      app._route = route;
    });
  }
  push(location) {
    this.history.push(location);
  }
}

VueRouter.install = install;

export default VueRouter;
