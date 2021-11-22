export const createRoute = (record, location) => {
  const matched = [];
  while (record) {
    matched.unshift(record);
    record = record.parent;
  }
  return {
    ...location,
    matched,
  };
};
class History {
  constructor() {
    this.current = createRoute(null, {
      path: "/",
    });
  }
  transitionTo(location, complete) {
    const current = this.router.match(location);
    if (
      current.path === this.current.path &&
      current.matched.length === this.current.matched.length
    ) {
      return;
    }
    this.current = current;
    this.cb && this.cb(this.current);
    complete && complete();
  }
  listen(cb) {
    this.cb = cb;
  }
}

export default History;
