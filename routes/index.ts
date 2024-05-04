// routes/index.ts
import { serveDir } from "deps";
import { createFullPageHtml } from "../components/fullPage.ts";
import { handleWorkoutForm } from "../components/workoutForm.ts";
import { createWorkout, getAllWorkouts, getWorkoutById, updateWorkout, deleteWorkout } from "../utils/workoutService.ts";

export async function handler(req: Request): Response {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "static",
      urlRoot: "static",
    });
  } else if (pathname === "/") {
    return createFullPageHtml(req);
  } else if (pathname === "/submit") {
    // Delegate to handleWorkoutForm function when this route is hit
    return handleWorkoutForm(req);
  } else if (pathname === "/workouts" && req.method === "GET" ) {
    return new Response(JSON.stringify(getAllWorkouts()), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } else if (pathname === "/workouts" && req.method === "POST" ) {
    try {
    const formData = await req.formData();
    const date = formData.get("date") as string;
    const type = formData.get("type") as string;
    const duration = parseInt(formData.get("duration") as string);
    await createWorkout(date, type, duration);
    return new Response("Workout created", { status: 201 });
  } catch (error) {
    return new Response(`Failed to create workout: ${error.message}`, { status: 400 });
  }
  }
  // addtional routes here can be adde for update and delete operations
  return new Response("404: Not Found", {
    status: 404,
  });
}
