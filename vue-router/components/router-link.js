export default {
  props: {
    to: {
      type: String,
    },
    tag: {
      type: String,
      default: "a",
    },
  },
  methods: {
    handleClick() {
      this.$router.push(this.to);
    },
  },
  render(h) {
    return h(
      this.tag,
      { on: { click: this.handleClick } },
      this.$slots.default
    );
  },
};
