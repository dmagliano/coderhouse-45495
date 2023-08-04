import { Router } from 'express';

const router = Router();

router.param('nome', (req, res, next, nome) => {
    console.log('req nome: ' + req.nome);
    console.log(`Validating ${nome}`);
    const regex = /^[a-zA-Z ]+$/;
    if(regex.exec(nome) === null) {
        res.send('Invalid name').status(400);
    } else {
        req.nome = nome;
        next();
    }

});

const pets = [];

router.post('/', (req, res) => {
    let pet = req.body;
    pets.push(pet);
    res.send(pet);
});

router.get('/:nome', (req, res) => {
    console.log('req nome depois do middleware: ' + req.nome);
    let pet = pets.find((pet) => pet.nome === req.nome);
    if(!pet) {
        res.status(404).send('Pet not found');
    }
    res.send(pet);

});

router.put('/:nome', (req, res) => {
    let pet = pets.find((pet) => pet.nome === req.nome);
    if(!pet) {
        res.status(404).send('Pet not found');
    } else {
        pet.adotado = true;
        pets.push(pet);
        res.send(pet); 
    }
 
});

export default router;