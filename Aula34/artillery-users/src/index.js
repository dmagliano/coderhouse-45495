import express from "express";
import userRouter from "../router/user-router.js";
import dataRouter from "../router/data-router.js";
import registerRouter from "../router/register-router.js";

const app = express();

const SERVER_PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});

app.use("/api/users", userRouter);
app.use("/api/data", dataRouter);
app.use("/api/register", registerRouter);