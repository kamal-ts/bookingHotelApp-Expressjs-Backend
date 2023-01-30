import {express} from '../../deps.ts';

const router = express.Router();

router.get("/auth", (req, res) => {
    res.send("auth route");
})  


export default router