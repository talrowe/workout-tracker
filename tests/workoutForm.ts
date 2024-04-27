// tests/workoutForm_test.ts
import { assertStringIncludes } from "https://deno.land/std/testing/asserts.ts";
import { createWorkoutFormHtml } from "../components/workoutForm.ts";

Deno.test("Workout Form renders input fields", () => {
  const formHtml = createWorkoutFormHtml();
  assertStringIncludes(formHtml, 'input type="number"');
});
