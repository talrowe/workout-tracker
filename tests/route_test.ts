// tests/route_test.ts
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { handleRequest } from "../routes/index.ts";

Deno.test("Index route returns the main page", async () => {
  const request = new Request("http://localhost/");
  const response = await handleRequest(request);
  if (response instanceof Response) {
    assertEquals(response.status, 200);
  } else {
    throw new Error("Expected a Response object, but got void.");
  }
});
