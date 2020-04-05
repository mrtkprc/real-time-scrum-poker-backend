const mongoose = require('mongoose');
require('dotenv').config();
module.exports = () => {
    mongoose
        .connect(process.env.DB_URI,{
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false })
        .then(() => console.log('Connected to MongoDB'))
        .catch(e => console.log(e));
};
