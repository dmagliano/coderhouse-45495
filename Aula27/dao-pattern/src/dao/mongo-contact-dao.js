const Contact = require('../models/contact-model.js');

class MongoContactDAO {
  async get() {
    return await Contact.find();
  }
}

module.exports = new MongoContactDAO();
