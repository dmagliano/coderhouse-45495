import express from "express";
import { log } from "console";

const app = express();

app.get("/simple", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  res.send(`Sum: ${sum}`);
});

app.get("/complex", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 5e4; i++) {
    sum += i;
  }
  res.send(`Sum: ${sum}`);
});

app.listen(8080, () => {
  log(`Servidor rodando na porta 8080`);
});
