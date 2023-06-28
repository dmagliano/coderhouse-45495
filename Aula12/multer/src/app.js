import express from 'express';
import { Router } from 'express';
import { uploader } from './utils.js';

const app = express();
const users = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.json(users);
});

const router = Router();

router.post('/upload', uploader, (req, res) => {
  if (req.file) {
    users.push(req.file);
    res.json({ message: 'File uploaded successfully.' });
  } else {
    res.status(400).json({ error: 'No file selected for upload.' });
  }
});

app.use(router);

const serverPort = 8080;

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);nod
});