import express from 'express';
import { Router } from 'express';
import userRouter from '../routes/users.router.js';
import mongoose from "mongoose";

const PORT = 8080;
const PRIVATE_KEY = 'umaStringDeChar';

const mongoUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/integradora-jwt?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
.then(() => { console.log("Connected to mongoDB")})
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use('/api/user', userRouter);