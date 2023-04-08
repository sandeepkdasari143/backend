const User = require('../models/user.model');
const generateCookieToken = require('../utils/cookieToken.util');

exports.signup = async (req, res, next) => {
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
}