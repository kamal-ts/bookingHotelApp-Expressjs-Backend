import express from "express";
import users from "../controller/userController.mjs";

const router = express.Router();

router.get("/users", users.getUser)
// router.get("/users/:id", "")
router.post("/users", users.createUser)
// router.patch("/users/:id", "")
// router.delete("/users/:id", "");

export default router;
