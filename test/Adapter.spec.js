const test = require("tape");
const { r } = require("renaissance")
const Adapter = require("../src/Adapter");

test("Adapter can be instantiated", t => {
  t.ok(new Adapter());
  t.end();
});

test("Adapter has appendHTML method", t => {
  const adapter = new Adapter();
  t.ok(typeof adapter.appendHTML === "function");
  t.end();
});

test("Adapter can be registered with renaissance", t => {
  t.ok(r.registerAdapter("appendHTML", Adapter))
  t.end()
})
