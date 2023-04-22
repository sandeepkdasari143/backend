const app = require('./app');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//Connect to the database and then, 
const connectToMongoDB = require('./config/db.connector');
connectToMongoDB();

//Config the Cloudinary Service
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true //https-secured-urls-flag
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
})