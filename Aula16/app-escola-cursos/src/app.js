import express, { urlencoded } from 'express';
import alunosRouter from './routes/alunos.router.js';
import cursosRouter from './routes/cursos.router.js';
import mongoose from 'mongoose';

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

const port = 8080;
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

const mongoAtlasUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/app-escola?retryWrites=true&w=majority'

mongoose.connect(mongoAtlasUrl)
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});

app.use('/api/alunos', alunosRouter);
app.use('/api/cursos', cursosRouter);