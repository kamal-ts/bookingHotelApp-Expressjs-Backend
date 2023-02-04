import {express} from '../../deps.ts';
import {
    createUser,
    getUser
} from '../controller/userController.ts'
const router = express.Router();

router.get("/users", getUser);
// router.get("/users/:uuid", getUserById);
router.post("/users", createUser);
// router.put("/users/:uuid", updateUser);
// router.delete("/users/:uuid", deleteUser);



export default router