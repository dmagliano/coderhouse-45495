import mongoose, { Schema } from "mongoose"

const toysCollection = 'toys';
const toySchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});

export const ToyModel = mongoose.model(toysCollection, toySchema);