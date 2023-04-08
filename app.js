const express = require("express");
require('dotenv').config();

//TODO: Bring an instance of express() class
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

//TODO: Swagger Documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// //TODO: regular middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

// //TODO: Cookies and file middlewares here
app.use(cookieParser());
app.use(fileUpload());

//TODO: morgan middleware
app.use(morgan('tiny'));


//TODO: Import all the routes here... Controllers -> Routes -> App.js
const home = require('./routes/home.route');

//TODO: Router Middleware
app.use('/api/v1/', home);

//TODO: Export an instance "app" of an express() class
module.exports = app;