import express from 'express';
import { Router } from 'express';
import petsRouter from './router/pets.router.js';
import UsersRouter from './router/users.router.js';

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use('/api/pets', petsRouter);

const usersRouter = new UsersRouter();
app.use('/api/users', usersRouter.getRouter());