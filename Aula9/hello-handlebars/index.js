const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const port = 8080;

let listaUsuarios = [
    { nome: "João", sobrenome: "Da Silva", email: "joaodasilva@uol.com.br" }
]

const viewFolder = 'views';

app.engine('handlebars', handlebars.engine());
app.set('views', viewFolder);
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    console.log("Recebida requisição GET");

    let posicaoArray = Math.floor(Math.random() * 3)

    let operador = {
        name: listaUsuarios[posicaoArray].nome,
        lastname: listaUsuarios[posicaoArray].sobrenome
    }

    //res.send(testUser)
    res.render('index', { operador: operador });
});

app.get('/funcionarios/', (req, res) => {
    console.log("Recebida requisição GET de funcionarios");

    let cargo = req.query.cargo;

    let operador = {
        name: "Diogo",
        lastname: "Magliano",
    }

    res.render('funcionarios', {
        operador: operador,
        isAdmin: cargo === "admin",
        usuarios: listaUsuarios
    });
});

app.get('/funcionarios/cadastro', (req, res) => {
    console.log("Recebida requisição GET de cadastro");

    res.render('cadastro');
});


app.get('/api/', (req, res) => {
    console.log("Recebida via API requisição GET");

    let posicaoArray = Math.floor(Math.random() * 3)

    res.send(listaUsuarios[posicaoArray])
});

app.post('/api/usuario', (req, res) => {
    const { nome, sobrenome, email } = req.body;
    const novoFuncionario = { nome, sobrenome, email}
    listaUsuarios.push(novoFuncionario)

    let operador = {
        name: novoFuncionario.nome,
        lastname: novoFuncionario.sobrenome
    }

    res.render('index', {
        operador: operador,
    })
});

const server = app.listen(port, () => console.log("Escutando na porta " + port));