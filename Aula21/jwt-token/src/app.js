import express from 'express';
import { generateToken, authToken } from './utils.js';

const app = express();
const PORT = 8080;
const PRIVATE_KEY = 'umaStringDeChar';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

const users = [];

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = users.find((user) => user.email === email);
    
    if(existingUser) {
        res.status(400).send('Email already registered');
    }

    const user = {name, email, password};
    users.push(user);

    console.log('user criado: ' + user.name);

    const acess_token = generateToken(user);
    res.send(acess_token);
});

app.post('/login', (req, res) => {
   const { email, password } = req.body;
   const user = users.find(user => user.email === email && user.password === password);
   if(!user) {
       res.status(400).send('Invalid credentials');
   }
   console.log('user logado: ' + user.name);
   const acess_token = generateToken(user);
   res.send(acess_token);
});

app.get('/me', authToken, (req, res) => {
    res.send(req.user);
});