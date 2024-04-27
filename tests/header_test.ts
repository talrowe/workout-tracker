// tests/header_test.ts
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createHeaderHtml } from "../components/header.ts";

Deno.test("Header component renders correctly", () => {
  const output = createHeaderHtml();
  assertEquals(output.includes("<div class=\"Workout Tracker\">"), true);
});
