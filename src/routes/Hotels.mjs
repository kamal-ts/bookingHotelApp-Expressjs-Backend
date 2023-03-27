import express from "express";
import hotels from "../controller/hotelController.mjs";

const router = express.Router();

router.get("/", hotels.getHotels)
router.get("/:id", hotels.getHotelsById)
router.post("/", hotels.createHotel)
// router.patch("//:id", "")
// router.delete("//:id", "");

export default router;
