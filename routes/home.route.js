//TODO: Routing logic comes here with the help of Controllers that we have created...
const express = require("express");
//TODO: Get an instance of express.Router() to implement the routing
const router = express.Router()
//TODO: Bring up the method from the controller
const {home} = require('../controllers/home.controller');

router.route('/').get(home);

module.exports = router