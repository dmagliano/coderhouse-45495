import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { addLogger, logger } from './logger.js';

const swaggerOption = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Documentação da API integradora',
            version: '1.0.0',
            description: 'Docs da API para pratica integradora',
        }
    },
    apis: ['./app.js'],
}

const specs = swaggerJSDoc(swaggerOption);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(addLogger)

app.listen(3000, () => console.log('Server started'));

let users = [];
const baseUser = {
    first_name: 'Teste',
    last_name: 'LastName',
    email: 'Teste@Test.com'
}
users.push(baseUser);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lista todos usuarios
 *     description: Retorna todos usuarios cadastrados
 *     responses:
 *       200:
 *         description: Array de usuarios
 *       404:
 *         description: Nenhum usuario cadastrado
 */

app.get('/', (req, res) => {
    if (users.length === 0) {
        logger.error('Nenhum usuário cadastrado');
        return res.status(404).json('Nenhum usuário cadastrado');
    }
    logger.info(`Retornando ${users.length} usuários`);
    res.send(users);
});


/**
 * @swagger
 * /users:
 *   post:
 *     summary: cria um usuario
 *     description: Retorna todos usuarios cadastrados
 *     responses:
 *       201:
 *         description: Usuario criado com sucesso
 *       400:
 *         description: Dados Invalidos
 */
app.post('/users', (req, res) => {
    const user = req.body;
    if(!user.email || !user.first_name || !user.last_name) {
        logger.error('Dados inválidos');
        return res.status(400).json('Dados inválidos');
    }
    users.push(user);
    res.status(201).json(`Usuário ${user.email} criado com sucesso`);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users[userId];
    if (!user) {
        logger.error(`Usuário com id: ${userId} não encontrado`);
        return res.status(404).json(`Usuario com id: ${userId} não encontrado`);
    }
    logger.info(`Retornando usuário ${user.email} com id: ${userId}`);
    res.send(user);
});