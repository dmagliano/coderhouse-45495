const express = require('express');
const mongoose = require('mongoose');
const contactDao = require('./dao/mongo-contact-dao.js');
//const contactDao = require('./dao/memory-contact-dao.js')

const mongoUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/dao-contact?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
.then(() => { console.log("Connected to mongoDB")})
.catch((error) => {
    if (error) {
    console.log("Cannot connect to mongoDB: " + error)
    process.exit();
    }
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/contacts', async (req, res) => {
  const contacts = await contactDao.get();
  res.json(contacts);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});