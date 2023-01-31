import { express } from './deps.ts';
import { cors } from './deps.ts';
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { mongoose } from './deps.ts';
// import User from './src/models/UserModel.js';
// import Hotel from './src/models/HotelModel.js';


const envVars = await config();
mongoose.connect(envVars.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });




// import HotelRoute from './src/routes/hotels.js'
// import UserRoute from './src/routes/users.js';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()


const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
// app.use(HotelRoute);
// app.use(UserRoute);


app.get("/", (_req, res) => {
    // const user = await User.find();
    // const hotel = await Hotel.find();
    // res.status(200).json({
    //     user,
    //     hotel
    // });

    res.sent("Hello world");
})

app.listen(port, () => {
    // prisma.$connect
    // tes koneksi
    const db = mongoose.connection;
    db.on('error', (error) => console.info(error));
    db.once('open', () => console.info('Database Connected...'));
    console.log(`server running on port ${port}`)
})