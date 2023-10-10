import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

import __dirname from './utils/index.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const swaggerOption = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentação da Adoptme API',
            version: '1.0.0',
            description: 'Docs da Adoptme API para aula de Swagger',
        }
    }
}

const options = {  
    definition: swaggerOption,
    apis: [`${__dirname}/docs/**/*.yaml`],
};

const specs = swaggerJsdoc(options);

let a = 0;

const MONGO_URL = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/swagger-adoptme?retryWrites=true&w=majority'
const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
