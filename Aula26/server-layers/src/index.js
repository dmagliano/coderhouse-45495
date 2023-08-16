import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/users.router.js";
import toysRouter from "./routers/toys.router.js";

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

app.use('/api/users', userRouter);
app.use('/api/toys', toysRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});