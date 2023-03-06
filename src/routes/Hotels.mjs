import express from "express";
import hotels from "../controller/hotelController.mjs";

const router = express.Router();

router.get("/hotels", hotels.getHotels)
// router.get("/hotels/:id", "")
router.post("/hotels", hotels.createHotel)
// router.patch("/hotels/:id", "")
// router.delete("/hotels/:id", "");

export default router;
