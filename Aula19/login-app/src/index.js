import express, { urlencoded } from "express";
import session from "express-session";
import cookieParser from 'cookie-parser';
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import loginRouter from "./routes/login.router.js";
import userRouter from "./routes/user.router.js";

const PORT = 8080;
const app = express();

const mongoUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/login-app?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
.then(() => { console.log("Connected to mongoDB")})
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: mongoUrl,
        mongoOptions: { useUnifiedTopology: true },
        ttl: 150,
    }),
    secret: "umaStringDeChar",
    resave: false,
    saveUninitialized: true
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);