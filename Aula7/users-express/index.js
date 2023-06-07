const express = require('express');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let arrayUsuarios = [];

app.get('/api/usuarios', (req, res) => {
    return res.status(200).send({arrayUsuarios});
})

app.put('/api/usuarios', (req, res) => {
    let usuarioModificado = req.body;

    if(!usuarioModificado.nome || !usuarioModificado.sobrenome){
        return res.status(400).send('Primeiro e ultimo nome são obrigatórios');
    }

    arrayUsuarios = arrayUsuarios.map( usuario => {
        if(usuarioModificado.nome == usuario.nome && usuarioModificado.sobrenome == usuario.sobrenome){
            return {...arrayUsuarios};
        }
        return {...usuarioModificado};
    })

    res.send("Usuario modificado")
})

app.post('/api/usuarios', (req, res) => {
  const { nome, sobrenome } = req.body;

  if (!nome || !sobrenome) {
    return res.status(400).send('Primeiro e ultimo nome são obrigatórios.');
  }

  const novoUsuario = { nome, sobrenome };
  arrayUsuarios.push(novoUsuario);

  res.status(201).send('Usuario criado com sucesso.');
});

app.delete('/api/usuarios/:nome', (req, res) => {
  const nome = req.params.nome;

  const tamInicial = arrayUsuarios.length;

  arrayUsuarios = arrayUsuarios.filter(user => user.nome != nome);

  if (arrayUsuarios.length === tamInicial) {
    return res.status(400).send('Usuario não encontrado.');
  }

  res.status(200).send('Usuario deletado com sucesso.');
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});