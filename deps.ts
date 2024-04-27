// deps.ts
export { serve } from "https://deno.land/std/http/server.ts";
export { serveFile } from "https://deno.land/std/http/file_server.ts";
export { assertEquals } from "https://deno.land/std/testing/asserts.ts";
export { serveDir, serveFile } from "jsr:@std/http/file-server";
