// routes/index.ts
import { serveDir, serveFile } from "jsr:@std/http/file-server";
import { createFullPageHtml } from "../components/fullPage.ts";

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
    try {
      const formData = await req.formData();
      const data = {
        exercise: formData.get("exercise"),
        duration: formData.get("duration"),
        notes: formData.get("notes")
      };
      // this is the line giving us issues it seems. 
      // console.log("Received data:", Object.formEntries(formData));
      // console.log("Received data:", Object.formEntries(formData.entries()));
      // return new Response(req, { status: 200 }); 
      return new Response(JSON.stringify(data), { 
        headers: { "Content-Type": "application/json" },
        status: 200 
      }); 
    } catch (error) {
      console.error("Error processing form: ", error);
      console.log("Error processing form: ", error);
      return new Response(req, { status: 500, body: "Server error: " + error.message });
    }
  }
  return new Response("404: Not Found", {
    status: 404,
  });
// });
}
