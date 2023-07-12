import mongoose from 'mongoose';
const cursosCollection = 'cursos';
const cursosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao: String,
    cargaHoraria: Number,
});

export const CursoModel = mongoose.model(cursosCollection, cursosSchema);