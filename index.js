import {express} from './deps.ts';
import {cors} from './deps.ts';
import HotelRoute from './src/routes/hotels.js'
import UserRoute from './src/routes/users.js';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()


const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(HotelRoute);
app.use(UserRoute);


app.get("/", (_req, res) => {
    res.send("server running");
})

app.listen(port, () => {
    // prisma.$connect
    console.log(`server running on port ${port}`)
})