import mongoose from 'mongoose';

const pedidosCollection = 'pedidos';

const pedidoSchema = new mongoose.Schema({
    nome: String,
    tamanho: {
        type: String,
        enum: ['pequena', 'media', 'grande'],
        default: 'media'
    },
    preco: Number,
    quantidade: Number,
    data: Date
});

const pedidoModel = mongoose.model(pedidosCollection, pedidoSchema);

export default pedidoModel;