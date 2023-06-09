import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io';

const app = express();
const server = app.listen(8080, () => console.log('Servidor rodando na porta 8080'));

const io = new Server(server);

const viewFolder = 'views';

app.engine('handlebars', handlebars.engine());
app.set('views', viewFolder);
app.set('view engine', 'handlebars');
app.use('/static', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/', viewsRouter);

let messages = [];
io.on('connection', (socket) => {
    console.log("Usuário conectado");

    socket.on('message', (data) => {
        messages.push(data);
        io.emit('messageLogs', messages);
    })
});