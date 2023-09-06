import express from 'express';
import compression from 'express-compression';

const app = express()
const port = 3000

app.use(compression(
    {brotli: {enabled: true, zlib:{}}}
));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('/', (req, res) => { 
    let string = `Essa é outra frase longa!`;
    for (let i = 0; i < 10e4 ; i++) {
        string += ` Essa é outra frase longa!`;
    }
    res.send(string)
});