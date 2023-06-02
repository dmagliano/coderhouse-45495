import express from 'express';

const servidor = express();

servidor.get('/hello/:nome', (request, response) => {
    let nome = request.params.nome;
    response.send("Olá "+ nome + " bem vindo ao servdior com express")
});

servidor.get('', (request, response) => {
    response.send("Raiz do meu projeto")
});

const usuario = {nome:"Diogo", sobrenome:"Magliano", idade:36};

servidor.get('/usuario', (request, response) => {
    response.send(usuario)
});

servidor.listen(8080, () => console.log("Aplicação iniciada na porta 8080"));