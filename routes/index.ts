// routes/index.ts
import { serveDir } from "deps";
import { createFullPageHtml } from "../components/fullPage.ts";
import { handleWorkoutForm } from "../components/workoutForm.ts";

export async function handler(req: Request): Response {
  const pathname = new URL(req.url).pathname;

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
  }
  return new Response("404: Not Found", {
    status: 404,
  });
}
