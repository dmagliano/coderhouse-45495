import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => { console.log(`Server listening on port 3000`)});


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/block', (req, res) => {
    res.send(soma().toString());
});

app.get('/nonblock', (req, res) => {
    const child = fork('./src/soma.js');
    child.send('start');
    child.on('message', (result) => {
        res.send(result);
    });
});


function soma() {
    let soma = 0
    for(let i = 0; i < 5e9; i++) {
        soma += i;
    }
    return soma;
}