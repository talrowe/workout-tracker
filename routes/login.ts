// routes/login.ts
import { Router } from "https://deno.land/x/oak/mod.ts";
import { loginController } from "../components/loginController.ts";

const router = new Router();

router.post('/login', loginController);

export default router;
