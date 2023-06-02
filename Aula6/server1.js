const http = require('http');

const server = http.createServer((request, response) => {
    response.end("Minha primeira repsonse neste backend agora com nodemon!")
});

server.listen(8080, () => {
    console.log("Escutando na porta 8080");
})