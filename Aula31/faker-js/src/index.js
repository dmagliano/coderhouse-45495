import express from 'express';
import userRouter from '../routes/user.js';

const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Lening on port ${port}!`))