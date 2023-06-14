const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;
const DATA_FILE = './pets.json';

// Middlewares do express para uso do Json e para decodificar a url.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Carrega os pets já registrado, caso exista.
let pets = [];
if (fs.existsSync(DATA_FILE)) {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  pets = JSON.parse(data);
}

//Rota de retorno dos pets
app.get('/api/pets', (req, res) => {
  res.json(pets);
});

//Rota para reigstrar um novo pet
app.post('/api/pets', (req, res) => {
    console.log(req.body)
  const { nome, idade, especie, dono } = req.body;
  const id = pets.length > 0 ? pets[pets.length - 1].id + 1 : 1;
  const newPet = { id, nome, idade, especie, dono };
  pets.push(newPet);
  salvaPetsNoArquivo();
  res.status(201).json(newPet);
});

// Helper function to save pets data to JSON file
function salvaPetsNoArquivo() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(pets), 'utf8');
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});