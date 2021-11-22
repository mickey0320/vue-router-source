export default {
  render(h) {
    this.$vnode.data.routerView = true;
    let parent = this.$parent;
    let deepth = 0;
    while (parent) {
      if (parent.$vnode?.data?.routerView) {
        deepth++;
      }
      parent = parent.$parent;
    }
    const matched = this.$route.matched;
    const record = matched[deepth];
    if (!record) {
      return h();
    }
    return h(record.component);
  },
};
