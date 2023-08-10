import express, { urlencoded } from "express";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import viewRouter from "./routes/views.router.js";
import loginRouter from "./routes/login.router.js";
import userRouter from "./routes/user.router.js";
import passport from 'passport';
import initializePassport from "./config/passport.config.js";

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
initializePassport();
app.use(passport.initialize());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.use('/', viewRouter)
app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);