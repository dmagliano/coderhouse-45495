import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

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

alunosSchema.plugin(mongoosePaginate);
const alunoModel = mongoose.model(alunosCollection, alunosSchema);

export default alunoModel;