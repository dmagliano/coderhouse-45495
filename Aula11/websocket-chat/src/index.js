import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io';

const app = express();
const server = app.listen(8080, () => console.log('Servidor rodando na porta 8080'));

const socketServer = new Server(server);

const viewFolder = 'views';

app.engine('handlebars', handlebars.engine());
app.set('views', viewFolder);
app.set('view engine', 'handlebars');
app.use('/', viewsRouter);

socketServer.on('connection', socket => {
    console.log('Novo cliente conectado ao servidor!');

    socket.on('message', data => {
        console.log(`Mensagem recebida de ${data}`);

        const socketId = socket.id;

        socketServer.emit('message', 'Servidor recebeu: ' + data + ' do cliente ' + socketId);
    });
});

socketServer.on('disconnect', () => {
    console.log('Usuario desconectao');
});