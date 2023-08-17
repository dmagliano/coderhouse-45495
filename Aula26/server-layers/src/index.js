import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routers/user-router.js";
import ToysRouter from "./routers/toy-router.js";
import OrderRouter from "./routers/order-router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/server-layers?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
.then(() => { console.log("Connected to mongoDB")})
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});

app.use('/api/users', UserRouter);
app.use('/api/toys', ToysRouter);
app.use('/api/orders', OrderRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});