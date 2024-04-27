// components/loginController.ts
import { ServerRequest, FormData } from "deps/";

export async function loginHandler(req: ServerRequest) {
  const formData = await new FormData(req);
  const username = formData.get("username");
  const password = formData.get("password");

  // Authentication logic goes here
  if (username === "user" && password === "pass") { // Simplified check
    req.respond({ status: 200, body: "Login Successful" });
  } else { 
    req.respond({ status: 401, body: "Unathorized" });
  }
}

export { loginController };
