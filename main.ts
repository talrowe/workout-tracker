// main.ts
import { handler } from "./routes/index.ts"
Deno.serve(handler);

// serve(router, { port: 8000 });
