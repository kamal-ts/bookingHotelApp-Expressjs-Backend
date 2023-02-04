import { Router } from "../../deps.ts";
import { createUser, getUser } from "../controller/userController.ts";

const router = new Router();

router
    .get("/users", getUser)
    .get("/users/:id", "")
    .post("/users", createUser)
    .patch("/users/:id", "")
    .delete("/users/:id", "");

export default router;
