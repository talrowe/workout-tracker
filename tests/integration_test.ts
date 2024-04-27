// tests/integration_test.ts
import { assertStringIncludes } from "https://deno.land/std/testing/asserts.ts";
import { createFullPageHtml } from "../components/fullPage.ts";

Deno.test("Full page renders with header and form", () => {
  const pageHtml = createFullPageHtml();
  assertStringIncludes(pageHtml, 'Workout Tracker'); // Header content
  assertStringIncludes(pageHtml, 'Submit Workout'); // Button in the form
});
