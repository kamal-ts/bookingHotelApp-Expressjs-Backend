import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import HotelRoute from './routes/hotels.js'
import UserRoute from './routes/users.js';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


dotenv.config();

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
    prisma.$connect
    console.log(`server running on port ${port}`)
})