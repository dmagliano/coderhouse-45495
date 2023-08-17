import mongoose, { Schema } from "mongoose"

const orderCollection = 'orders';
const orderSchema = new mongoose.Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    items: [{
        _id: false,
        toy: {
            type: Schema.Types.ObjectId,
            ref: 'toys',
            
        },
        quantity: Number
      }],
    total: Number
    
});

export const OrderModel = mongoose.model(orderCollection, orderSchema);