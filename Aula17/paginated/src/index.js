import mongoose from "mongoose";
import alunoModel from "./model/alunos.model.js";

const collection = 'test'
const mongoAtlasUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/' + collection + '?retryWrites=true&w=majority'

const paginate = async() => {

    await mongoose.connect(mongoAtlasUrl)
    let alunos = await alunoModel.paginate({},{limit:5, page:38})

    console.log(alunos);
};

paginate()
