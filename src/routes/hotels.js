import {express} from '../../deps.ts';
import { getHotel, getHotelById, createHotel, updateHotel, deleteHotel } from '../controllers/HotelController.js'

const router = express.Router();

router.get("/hotels", getHotel);
router.get("/hotels/:id", getHotelById);
router.post("/hotels", createHotel);
router.put("/hotels/:id", updateHotel);
router.delete("/hotels/:id", deleteHotel);


export default router