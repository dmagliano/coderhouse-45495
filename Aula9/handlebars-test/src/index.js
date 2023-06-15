const express = require('express');
const app = express();
const port = 8080;
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const testUser = {
    nome: 'Diogo'
  };

  res.render('index', testUser);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
