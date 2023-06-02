const http = require('http');

const server = http.createServer((request, response) => {
    response.end("Fazendo em tempo real um servidor")
});

server.listen(8080, () => {
    console.log("Servidor funcionando na porta 8080");
});