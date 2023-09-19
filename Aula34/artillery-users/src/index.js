import express from "express";

const app = express();

const SERVER_PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});