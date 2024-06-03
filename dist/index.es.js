import { defineComponent as r, openBlock as a, createElementBlock as s, Fragment as l, createElementVNode as o, toDisplayString as p } from "vue";
const u = /* @__PURE__ */ r({
  __name: "Test",
  props: {
    name: {}
  },
  emits: ["update"],
  setup(e, { emit: t }) {
    const n = t, c = () => {
      n("update", "test");
    };
    return (m, i) => (a(), s(l, null, [
      o("div", null, "name: " + p(m.name), 1),
      o("button", { onClick: c }, "update")
    ], 64));
  }
}), _ = /* @__PURE__ */ r({
  __name: "Hello",
  props: {
    age: {}
  },
  setup(e) {
    return (t, n) => (a(), s("div", null, "age: " + p(t.age), 1));
  }
}), f = (e) => e, g = u, C = _;
export {
  C as HelloCom,
  g as TestCom,
  f as foo
};
