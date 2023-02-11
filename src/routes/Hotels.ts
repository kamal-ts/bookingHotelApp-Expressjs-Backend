import { Router } from "../../deps.ts";
import hotels from "../controller/hotelController.ts";

const router = new Router();

router
    .get("/hotels", hotels.getHotels)
    .get("/hotels/:id", "")
    .post("/hotels", hotels.createHotel)
    .patch("/hotels/:id", "")
    .delete("/hotels/:id", "");

export default router;
