import express from 'express'; 
import UsersRouter from './routers/users-router.js';
import BusinessRouter from './routers/business-router.js';
import OrdersRouter from './routers/orders-router.js';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', UsersRouter);
app.use('/api/business', BusinessRouter);
app.use('/api/orders', OrdersRouter);

app.listen(PORT, () => {
  console.log(`Coder-Eats: Ouvindo a porta ${PORT}`);
});