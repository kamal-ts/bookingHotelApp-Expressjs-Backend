import express from "express";
import users from "../controller/userController.mjs";
import validasi from '../middleware/validasi.mjs';


const router = express.Router();

router.get("/", users.getUser)
router.get("/:id", users.getUsersById)
router.post("/", validasi.register, users.createUser)
router.delete("/:id", users.deleteUsers);
router.patch("/:id", validasi.updateUser, users.updateUser)

export default router;
