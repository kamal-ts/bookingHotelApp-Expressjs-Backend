import express from 'express';
import { getHotel, getHotelById, createHotel, updateHotel, deleteHotel } from '../controllers/HotelController.mjs'

const router = express.Router();

router.get("/hotels", getHotel);
router.get("/hotels/:id", getHotelById);
router.post("/hotels", createHotel);
router.put("/hotels/:id", updateHotel);
router.delete("/hotels/:id", deleteHotel);


export default router