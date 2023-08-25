import Order from '../dao/order-dao.js'
import User from '../dao/users-dao.js'
import Business from '../dao/business-dao.js'

const orderService = new Order();
const userService = new User();
const businessService = new Business();

export const getOrders = async (req, res) => {
    let result = await orderService.getOrders()
    if(!result){
        res.status(404).send('Orders not found');
    }
    res.send(result);
}

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    let result = await orderService.getOrderById(id);
    if(!result){
        res.status(404).send('Order not found');
    }
    res.send(result);
}

export const createOrder = async (req, res) => {
    const { user, business, products } = req.body;
    const resultUser = await userService.getUserById(user);
    const resultBusiness = await businessService.getBusinessById(business);
    if(!resultUser || !resultBusiness){
        res.status(400).send('User or Business not found');
    }
    let actualOrders = resultBusiness.products.filter(product => products.includes(product.id));
    let sum = actualOrders.reduce((acc,prev) => {
        acc += prev.price
        return acc;
    },0);
    let orderNumber = Date.now() + Math.floor(Math.random() * 1000);
    let order = {
        number: orderNumber,
        business,
        user,
        status: 'pending',
        products: actualOrders.map(product => product.id),
        totalPrice: sum
    }
    let orderResult = await orderService.saveOrder(order);
    resultUser.orders.push(orderResult._id);
    await userService.updateUser(user, resultUser);
    res.send(orderResult);
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query;
    let order = await orderService.getOrderById(req.params.id);
    order.status = resolve;
    await orderService.resolveOrder(order._id, order);
    res.send(order);
}