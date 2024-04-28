// components/workoutForm.ts
import { parseDuration, durationToSeconds } from "../utils/time.ts";

export function createWorkoutFormHtml(req: Request): Response {
  return `
  <form id="workoutForm" method="POST" action="/submit">
    <input type="text" name="exercise" placeholder="Type of Exercise" required>
    <input type="number" name="duration" placeholder="Duration (minutes)" required>
    <textarea name="notes" placeholder="Notes"></textarea>
    <button type="submit">Submit Workout</button>
  </form>
`;
}

export async function handleWorkoutForm(request: Request): Promise<Response> {
  if (request.method === "POST") {
    const formData = await reqeuest.formData();
    const durationInput = formData.get("duration") as string;
    try {
      const duration = parseDuration(durationInput);
      const durationInSeconds = durationToSeconds(duration);
      // Continue processing the form or store the data
      return new Response(`Duration in seconds: ${durationInSeconds}`, { status: 200 });
    } catch (error) {
      return new Response(error.message, { status: 400 });
    }
  }
  return new Response("Method Not Allowed", { status: 405 });
}
