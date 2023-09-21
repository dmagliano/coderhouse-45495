import express from "express";
import mongoose from "mongoose";
import userRouter from "../router/user-router.js";
import dataRouter from "../router/data-router.js";
import registerRouter from "../router/register-router.js";


const app = express();
const SERVER_PORT = process.env.SERVERPORT || 8080;
const mongoUrl = process.env.MONGO_URL
const connection = await mongoose.connect(mongoUrl)
  .then(() => { console.log("Connected to mongoDB") })
  .catch((error) => {
    if (error) {
      console.log("Cannot connect to mongoDB: " + error)
      process.exit();
    }
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

app.use("/api/users", userRouter);
app.use("/api/data", dataRouter);
app.use("/api/register", registerRouter);
