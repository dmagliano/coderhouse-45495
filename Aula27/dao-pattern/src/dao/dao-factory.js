const mongoose = require('mongoose');

class ContactDao {

    async createContactDao() {

        let ContactDao;

        switch (process.env.PERSISTENCE) {
            case 'MONGO':
                console.log("Using mongoDB persistence");
                const mongoUrl = 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/dao-contact?retryWrites=true&w=majority';
                const connection = await mongoose.connect(mongoUrl)
                    .then(() => { console.log("Connected to mongoDB") })
                    .catch((error) => {
                        if (error) {
                            console.log("Cannot connect to mongoDB: " + error)
                            process.exit();
                        }
                    });

                const { default: mongoContactDao } = await import('./mongo-contact-dao.js');
                ContactDao = mongoContactDao;
                break;
            case 'MEMORY':
                console.log("Using memory persistence");
                const { default: memoryContactDao } = await import('./memory-contact-dao.js');
                ContactDao = memoryContactDao;
                break;
        }
        return ContactDao;
    };

}

module.exports = new ContactDao();