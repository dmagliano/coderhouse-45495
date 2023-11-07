import Stripe from 'stripe';

export default class PaymentService{

    constructor(){
        this.stripe = Stripe(process.env.REACT_APP_STRIPE_KEY);
    }

    createPaymentIntent = async (paymentIntentInfo) => {
        const paymentIntent = await this.stripe.paymentIntents.create(paymentIntentInfo);
        return paymentIntent;
    }
}