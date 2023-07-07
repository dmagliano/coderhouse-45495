import mongoose from 'mongoose';

const keyCollection = 'pix_keys';
const keySchema = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
    },
    keyType: String,
    createDate: {
        type: Date,
        default: new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"})
    },
    user: String
});

export const KeyModel = mongoose.model(keyCollection, keySchema);
