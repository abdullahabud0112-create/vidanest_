import { test } from "node:test";
import assert from "node:assert/strict";
import { serializeJsonLd } from "../../lib/jsonld.ts";

test("escapes '<' so a field cannot break out of the JSON-LD script tag", () => {
  const payload = serializeJsonLd({
    name: "</script><img src=x onerror=alert(1)>",
  });
  assert.ok(!payload.includes("<"), "no raw '<' may survive serialization");
  assert.ok(payload.includes("\\u003c"));
});

test("escaped output is still valid JSON", () => {
  const payload = serializeJsonLd({ a: "</script>", b: "c<d" });
  assert.deepEqual(JSON.parse(payload), { a: "</script>", b: "c<d" });
});

test("single quote payloads are unchanged and harmless", () => {
  const payload = serializeJsonLd({ s: `'; alert(1); '` });
  assert.deepEqual(JSON.parse(payload), { s: `'; alert(1); '` });
});
