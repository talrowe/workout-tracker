// deps.ts
export { serveDir } from "jsr:@std/http/file-server";
export { serveFile } from "jsr:@std/http/file-server";

// Need to update these: 
export { serve } from "https://deno.land/std/http/server.ts";
export { assertEquals } from "https://deno.land/std/testing/asserts.ts";
export { join } from "https://deno.land/std/path/mod.ts";
// export { open, save } from "https://deno.land/x/sqlite.ts";
export { open, save } from "https://deno.land/x/sqlite/mod.ts";
// export { } from "https://deno.land/x/sqlite/mod.ts";

// For testing
// export { appendFile } from "https://deno.land/std/fs/mod.ts";
