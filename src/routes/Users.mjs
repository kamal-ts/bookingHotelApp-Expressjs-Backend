import express from "express";
import users from "../controller/userController.mjs";
import validasi from '../middleware/validasi.mjs'
const router = express.Router();

router.get("/", users.getUser)
router.get("/:id", users.getUsersById)
router.post("/", validasi.register, users.createUser)
// router.patch("/users/:id", "")
// router.delete("/users/:id", "");

export default router;
