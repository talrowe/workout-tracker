// components/workoutForm.ts
import { parseDuration, durationToSeconds } from "../utils/time.ts";

export function createWorkoutFormHtml(req: Request): Response {
  return `
  <form id="workoutForm" method="POST" action="/submit">
    <input type="text" name="exercise" placeholder="Type of Exercise" required>
    <input type="text" name="duration" placeholder="Duration (e.g., 1h 30m)" required>
    <textarea name="notes" placeholder="Notes"></textarea>
    <button type="submit">Submit Workout</button>
  </form>
`;
}

export async function handleWorkoutForm(req: Request): Promise<Response> {
  if (req.method === "POST") {
    const formData = await req.formData();
    const durationInput = formData.get("duration") as string;

    try {
    // const exercise = formData.get("exercise") || '';
    // const durationInput = formData.get("duration") || '';
    // const notes = formData.get("notes") || '';

    // const duration = parseDuration(durationInput.toString());
    // const durationInSeconds = durationToSeconds(duration);

    const duration = parseDuration(durationInput);
      
    const responseData = {
      exercise: formData.get("exercise"),
      duration: `${duration.hours}h ${duration.minutes}m ${duration.seconds}s`,
      notes: formData.get("notes"),
      error: null
    };

    console.log("Sending response data:", responseData); // log to check actual data.
    
    return new Response(JSON.stringify(responseData), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400
    });
  }
  }
  return new Response("Method Not Allowed", { status: 405 });
  }
