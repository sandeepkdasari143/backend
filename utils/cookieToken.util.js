const generateCookieToken = (user, res) => {
    
    const token = user.generateJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

    user.password = undefined;

    res.status(201).cookie('token', token, options).json({
        success: true,
        token,
        loggedInUser:{
            isLoggedIn: true,
            credentials: user,
        }
    })
}

module.exports = generateCookieToken;