import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo'

function auth(req, res, next) {
    if (req.session?.user === 'admin' && req.session?.admin) {
        return next();
    } else {
        return res.status(401).send('Você não está autorizado a acessar essa página');
    }
};
const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static('../static'));

app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions: { useUnifiedTopology: true },
        ttl: 650,
    }),
    secret: "umaStringDeChar",
    resave: false,
    saveUninitialized: true
}));

app.get('/session', (req, res) => {

    if (req.session.counter) {
        req.session.counter++;
        res.send(`Você já visitou essa página ${req.session.counter} vezes`);
    } else {
        req.session.counter = 1;
        res.send('Bem vindo a página');
    }
});

app.get('/session/logout', (req, res) => {
    req.session.destroy(
        (err) => {
            if (!err) res.send('Logout realizado com sucesso');
            else res.send({ status: 'Logout falhou' });
        });
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if (username !== 'diogo' && password !== 'admin') {
        return res.send('Login inválido');
    }
    req.session.user = username;
    req.session.admin = true;
    res.send('Login realizado com sucesso');
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.send({ status: 'Logout falhou' });
        }
        res.send('Logout realizado com sucesso');
    });
});

app.get('/admin', auth, (req, res) => {
    let username = req.session.user;
    res.send('Pagina do usuario admin: ' + username);
});

app.post('/cookie', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    res.cookie(`Cookie de ${nome}`, email, { maxAge: 10000 }).redirect('/index.html');
});

app.get('/cookie/read', (req, res) => {
    console.log(req.cookies);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});