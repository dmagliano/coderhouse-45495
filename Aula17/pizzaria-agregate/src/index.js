import mongoose from "mongoose";
import pedidoModel from "./models/pedido.model.js";

const collection = 'pizzaria'
const mongoAtlasUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/' + collection + '?retryWrites=true&w=majority'

const enviroment = async() => {

    await mongoose.connect(mongoAtlasUrl)
    let result = await pedidoModel.insertMany(
        [
            { nome: "Calabresa", tamanho: "pequena", preco: 20, quantidade: 13, data: "2023-07-12T19:30Z" },
            { nome: "Mussarela", tamanho: "media", preco: 15, quantidade: 7, data: "2023-07-12T22:30Z" },
            { nome: "Portuguesa", tamanho: "grande", preco: 25, quantidade: 8, data: "2023-07-12T20:30Z" },
            { nome: "Frango com Catupiry", tamanho: "pequena", preco: 22, quantidade: 15, data: "2023-07-12T21:30Z" },
            { nome: "Calabresa", tamanho: "media", preco: 18, quantidade: 5, data: "2023-07-12T18:30Z" },
            { nome: "Mussarela", tamanho: "grande", preco: 20, quantidade: 5, data: "2023-07-12T21:30Z" },
            { nome: "Portuguesa", tamanho: "pequena", preco: 15, quantidade: 3, data: "2023-07-12T21:30Z" },
            { nome: "Frango com Catupiry", tamanho: "grande", preco: 25, quantidade: 12, data: "2023-07-12T20:30Z" },
            { nome: "Vegetaria", tamanho: "media", preco: 25, quantidade: 12, data: "2023-07-12T16:30Z" },
            { nome: "Presunto e Queijo", tamanho: "media", preco: 15, quantidade: 10, data: "2023-07-12T15:30Z" },
            { nome: "Quatro Queijos", tamanho: "media", preco: 20, quantidade: 5, data: "2023-07-12T15:30Z" }

        ]
    );
    console.log(result);
}

const agreagate = async() => {
    await mongoose.connect(mongoAtlasUrl)

    let listaPedidos = await pedidoModel.aggregate([
        { $match: {tamanho: "media"} },
        { $group: { _id: "$nome", quantidadeTotal: { $sum: "$quantidade" }}},
        { $sort: { quantidadeTotal: -1 }},
        { $group: { _id:1, pedidos: { $push: "$$ROOT"}} },
        { $project: { _id: 0, pedidos: "$pedidos" }},
        { $merge: { into: 'relatorios'}}
    ])

    console.log(listaPedidos);
}

//enviroment();
agreagate();