// tests/deps_test.ts
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as deps from "../deps.ts";

Deno.test("Check if all dependencies are imported", () => {
  assertEquals(typeof deps, 'object');
});
