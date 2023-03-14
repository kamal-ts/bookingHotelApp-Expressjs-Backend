import express from "express";
import users from "../controller/userController.mjs";
import validasi from '../middleware/validasi.mjs'
const router = express.Router();

router.get("/users", users.getUser)
router.get("/users/:id", users.getUsersById)
router.post("/users", validasi.register, users.createUser)
// router.patch("/users/:id", "")
// router.delete("/users/:id", "");

export default router;
