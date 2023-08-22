const contacts = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ];
  
  class MemoryContactDAO {
    get() {
      return contacts;
    }
  }
  
  module.exports = new MemoryContactDAO();
  