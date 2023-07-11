import mongoose from 'mongoose';
const alunosCollection = 'alunos';
const alunosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        index:true
    },
    sobrenome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cpf:{
        type: String,
        unique: true,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    nota: Number,
});

export const AlunoModel = mongoose.model(alunosCollection, alunosSchema);