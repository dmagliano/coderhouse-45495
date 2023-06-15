const express = require('express');
const app = express();
const port = 8080;
const handlebars = require('express-handlebars');

const items = [
  { nome: 'item1', preco: 10 },
  { nome: 'item2', preco: 20 },
  { nome: 'item3', preco: 30 },
  { nome: 'item4', preco: 40 },
];

const testUser = {
  nome: 'Diogo',
  sobrenome: 'Magliano',
  admin: true
};

const data = {
  nome: testUser.nome,
  sobrenome: testUser.sobrenome,
  admin: testUser.admin,
  items: items,
};

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
