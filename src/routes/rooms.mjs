import express from 'express';
import { getRooms, getRoomsById, createRooms, updateRooms, deleteRooms } from '../controllers/RoomController.mjs'
const router = express.Router();

router.get("/rooms", getRooms);
router.get("/rooms/:id", getRoomsById);
router.post("/rooms", createRooms);
router.put("/rooms/:id", updateRooms);
router.delete("/rooms/:id", deleteRooms);


export default router