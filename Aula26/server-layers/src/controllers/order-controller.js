import orderService from "../services/order-service.js";

class OrderController {

    async createOrder(req, res) {
        let userId = req.query.user;
        let itemList = req.body;

        if (!userId || !itemList) {
            return res.status(400).send("Missing parameters");
        }
        try {
            let order = await orderService.createOrder(userId, itemList);
        if (!order) {
            return res.status(400).send("error");
        }
        return res.send(order);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    async getOrders(req, res) {
        let orders = await orderService.getOrders();
        return res.send(orders);
    }

}

export default new OrderController;