import express from "express";

const app = express();

app.get('/', (request, response) =>{
    response.send("Raiz do projeto")
})

app.get('/hello', (request, response) =>{
    response.send("Olá pessoal, agora usando express js")
})

app.listen(8080, () => console.log("Servidor rodando na porta 8080"));