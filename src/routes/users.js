import express from 'express';
import { getUser, getUserById, createUser, updateUser, deleteUser } from '../src/controllers/UserController.js.js'
const router = express.Router();

router.get("/users", getUser);
router.get("/users/:uuid", getUserById);
router.post("/users", createUser);
router.put("/users/:uuid", updateUser);
router.delete("/users/:uuid", deleteUser);



export default router