import { Router } from "express";
import PaymentService from "../service/payment-service.js";

const router = Router();

const products = [
    { id: 1, name: "batatas", price: 1000 },
    { id: 2, name: "queijo", price: 500 },
    { id: 3, name: "hambúrguer", price: 1500 },
    { id: 4, name: "refrigerante", price: 1000 },
    { id: 5, name: "doce", price: 800 }
];

router.post('/payment-intents', async (req, res) => {
    const productRequested = products.find(product => product.id === parseInt(req.query.id));
    if (!productRequested) return res.status(404).send({ status: "error", error: "product not found" });

    const paymentIntentInfo = {
        amount: productRequested.price,
        currency: 'USD',
        metadata: {
            userId: 123456789,
            orderDetails: JSON.stringify({
                [productRequested.name]: 2
            }, null, '\t'),
            address: JSON.stringify({
                street: "Rua de teste",
                postalCode: "13400",
                externalNumber: "123123"
            }, null, '\t')
        }
    }

    const service = new PaymentService();
    let result = await service.createPaymentIntent(paymentIntentInfo);
    console.log(result);
    res.send({ status: "success", payload: result });

});

export default router;