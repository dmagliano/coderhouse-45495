import express, { urlencoded }  from "express";
import handlebars from "express-handlebars";
import pixRouter from "./routes/pix.routes.js";
import viewsRouter from "./routes/view.routes.js";
import mongoose from "mongoose";

const app = express();
const viewFolder = 'views';

app.engine('handlebars', handlebars.engine());
app.set('views', viewFolder);
app.set('view engine', 'handlebars');
app.use('/', viewsRouter);

app.use(urlencoded({extended: true}));
app.use(express.json());

const port = 8080;
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

const dbUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/pix_integrador?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
.then(() => { console.log("Connected to mongoDB")})
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});

app.use('/api/pix' , pixRouter);
app.use('/' , viewsRouter);