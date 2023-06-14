const express = require('express');
const router = express.Router();

const listaPets = [];

router.get('/', (req, res) => {
  console.log(listaPets)
  res.send(listaPets);
});

router.post('/', (req, res) => {
  const { nome, dono, idade } = req.body;
  const novoPet = { nome, dono, idade }
  listaPets.push(novoPet)
  res.send(novoPet);
});

router.get('/:id', (req, res) => {
  const petId = req.params.id;
  res.send(`Detalhes do pet com ID ${petId}`);
});

module.exports = router;
