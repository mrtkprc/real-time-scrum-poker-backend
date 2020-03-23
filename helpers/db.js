const mongoose = require('mongoose');
require('dotenv').config();
module.exports = () => {
    mongoose
        .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(e => console.log(e));
};
