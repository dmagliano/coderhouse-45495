const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const daoFactory = require('./dao/dao-factory.js');

console.log(config)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let contactDao;

(async () => {
  contactDao = await daoFactory.createContactDao();
})()

app.get('/contacts', async (req, res) => {
  const contacts = contactDao.get();
  res.json(contacts);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});