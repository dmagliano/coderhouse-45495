import { OrderModel } from '../models/order-model.js';
import { ToyModel } from '../models/toy-model.js';

class OrderService {

    async createOrder(userId, itemList) {

        if (itemList.length == 0) {
            throw new Error("Empty order");
        }

        let orderTotal = 0;
        for (let item of itemList) {
            let toy = await ToyModel.findById(item.toy);
            if (!toy) {
                throw new Error("Toy not found");
            }
            item.price = toy.price;
            item.total = toy.price * item.quantity;
            orderTotal += item.total;
        };

        let order = {
            user: userId,
            items: itemList,
            total: orderTotal
        };

        order = await OrderModel.create(order);
        return OrderModel.findById(order._id).populate('user').populate('items.toy', ['name', 'price']);
    }

    async getOrders() {
        try {
            let orders = OrderModel.find()
                .populate('user')
                .populate('items.toy', ['name', 'price']);

            return orders;
        } catch (error) {
            throw error;
        }
    }

}

export default new OrderService;