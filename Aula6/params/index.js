const express = require('express');

const app = express();

const users = [
    {id:"1",nome: "Carlos", sobrenome: "Rafael", curso:"Backend"},
    {id:"2",nome: "Diogo", sobrenome: "Magliano", curso:"Backend"},
    {id:"3",nome: "Hugo", sobrenome: "Magliano", curso:"Frontend"},
];

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send({users})
});

app.get('/user/:idUser', (req,res) => {
    let userId = req.params.idUser;
    let user = users.find(u => u.id==userId);

    if(!user) return res.send({error: "Usuario não encontrado"});

    res.send({user})
});

app.get('/user', (req,res) => {
    
    let cursoUsuario = req.query.curso;

    if(cursoUsuario){
        let usuarioFiltrado = users.filter(usuario => usuario.curso===cursoUsuario);
        
        console.log(usuarioFiltrado);

        if(usuarioFiltrado.length >= 1){
            res.send({usuarioFiltrado});
        } 

        res.send([]);
    }

    res.send(users)
});

app.listen(8080, () => console.log("Funcionando na porta 8080"));