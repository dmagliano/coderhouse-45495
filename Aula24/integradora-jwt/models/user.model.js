import mongoose from 'mongoose';

const userCollection = 'users';
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
});

export const UserModel = mongoose.model(userCollection, userSchema);