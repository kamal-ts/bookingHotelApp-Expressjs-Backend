import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors';
import UserRoute from './src/routes/Users.mjs'
import HotelRoute from './src/routes/Hotels.mjs'

const app = express();
const port = 5000

// app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(HotelRoute);


app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.use((err, _req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.