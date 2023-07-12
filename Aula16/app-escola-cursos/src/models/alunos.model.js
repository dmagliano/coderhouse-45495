import mongoose from 'mongoose';
import { CursoModel } from './cursos.model.js';

const cursoModel = CursoModel.schema;
const alunosCollection = 'alunos';
const alunosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cursos:{
     type: [
        {
            curso:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "cursos"
            }
            
        }
     ] 
    }
});

alunosSchema.pre('find', function() {
    this.populate('cursos.curso')
});

export const AlunoModel = mongoose.model(alunosCollection, alunosSchema);