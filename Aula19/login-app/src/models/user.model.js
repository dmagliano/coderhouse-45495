import mongoose from 'mongoose';

const userCollection = 'users';
const userSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    idade: Number,
    password: String,
});

export const UserModel = mongoose.model(userCollection, userSchema);