import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import type { Server } from "node:http";
import type { AddressInfo } from "node:net";
import { createApp } from "../src/app.js";

let server: Server;
let base: string;

before(() => {
  server = createApp().listen(0);
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});
after(() => server.close());

test("lists all campaigns", async () => {
  const res = await fetch(`${base}/api/campaigns`);
  assert.equal((await res.json()).length, 2);
});

test("filters to active campaigns", async () => {
  const res = await fetch(`${base}/api/campaigns?active=true`);
  assert.deepEqual((await res.json()).map((c: { id: string }) => c.id), ["fall-2026"]);
});
