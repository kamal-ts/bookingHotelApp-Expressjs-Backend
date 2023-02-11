import { Router } from "../../deps.ts";
import users from "../controller/userController.ts";

const router = new Router();

router
    .get("/users", users.getUser)
    .get("/users/:id", "")
    .post("/users", users.createUser)
    .patch("/users/:id", "")
    .delete("/users/:id", "");

export default router;
