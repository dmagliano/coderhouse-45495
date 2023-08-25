import express from 'express';
import mongoose from 'mongoose';
import UsersRouter from './routers/users-router.js';
import BusinessRouter from './routers/business-router.js';
import OrdersRouter from './routers/orders-router.js';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/coder-eats?retryWrites=true&w=majority';
const connection = await mongoose.connect(mongoUrl)
  .then(() => { console.log("Connected to mongoDB") })
  .catch((error) => {
    if (error) {
      console.log("Cannot connect to mongoDB: " + error)
      process.exit();
    }
  });

app.use('/api/users', UsersRouter);
app.use('/api/business', BusinessRouter);
app.use('/api/orders', OrdersRouter);

app.listen(PORT, () => {
  console.log(`Coder-Eats: Ouvindo a porta ${PORT}`);
});