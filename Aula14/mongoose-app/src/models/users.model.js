import mongoose from 'mongoose';
const userCollection = 'users';
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    }
});

export const UserModel = mongoose.model(userCollection, UserSchema);