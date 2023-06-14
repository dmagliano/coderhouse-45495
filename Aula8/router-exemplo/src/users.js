const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Detalhes do usuário com ID ${userId}`);
});

module.exports = router;
