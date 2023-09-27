import express from 'express';
import climaRoute from '../routes/clima-route.js';

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clima', climaRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))