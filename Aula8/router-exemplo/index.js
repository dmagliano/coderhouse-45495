const express = require('express');
const app = express();

const usersRouter = require('./src/users');
const petsRouter = require('./src/pets');
const porta = 8081;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/usuarios', usersRouter);
app.use('/pets', petsRouter);

app.use('/static',express.static('public'));

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});