import orderModel from "../models/order-model.js"

export default class Order {

    getOrders = async () => {
        try {
            let orders = await orderModel.find({});
            return orders;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getOrderById = async (id) => {
        try {
            let order = await orderModel.findById(id);
            return order;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    saveOrder = async (order) => {
        try {
            let newOrder = await orderModel.create(order);
            return newOrder;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    resolveOrder = async (id, Order) => {
        try {
            let result = await orderModel.updateOne({_id:id},{$set:Order});
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}