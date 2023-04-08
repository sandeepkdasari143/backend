const app = require('./app');
require('dotenv').config();

const connectToMongoDB = require('./config/db.connector');
connectToMongoDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
})