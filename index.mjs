import express from 'express'
import UserRoute from './src/routes/Users.mjs'
import HotelRoute from './src/routes/Hotels.mjs'

const app = express();

app.use(express.json());
app.use('/v1/users', UserRoute);
app.use('/v1/hotels', HotelRoute);


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

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});