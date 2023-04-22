require('dotenv').config();
const mongoose = require("mongoose");

const connectToMongoDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log(`DB Connected :D`))
    .catch(error => {
        console.log(`DB Connection Failed :()`);
        console.log(error);
        console.log(error.message);
        process.exit(1);
    })
}
module.exports = connectToMongoDB;