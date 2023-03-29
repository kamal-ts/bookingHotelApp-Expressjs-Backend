import express from "express";
import hotels from "../controller/hotelController.mjs";

const router = express.Router();

router.get("/", hotels.getHotels)
router.get("/:id", hotels.getHotelsById)
router.post("/", hotels.createHotel)
router.delete("/:id", hotels.deleteHotels);
// router.patch("//:id", "")

export default router;
