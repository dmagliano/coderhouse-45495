const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const daoFactory = require('./dao/dao-factory.js');

console.log(config)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/contacts', async (req, res) => {
  const contactDao = await daoFactory.createContactDao();
  const contacts = contactDao.get();
  res.json(contacts);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});