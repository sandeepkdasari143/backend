const User = require('../models/user.model');
const asyncHandler = require('../service/asyncHandler');
const generateCookieToken = require('../utils/cookieToken.util.js');

exports.signup = asyncHandler(async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return next(new Error("username, email and password are required!"))
    }

    const user = await User.create({
        username,
        email,
        password
    });

    generateCookieToken(user, res);
});