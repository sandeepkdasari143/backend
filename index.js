const app = require('./app');
const connectToMongoDB = require('./config/db.connector');
require('dotenv').config();

connectToMongoDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
})