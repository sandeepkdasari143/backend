//TODO: business logic comes here... (Main Functionality)
exports.home = (req,res) => {
    res.status(200).json({
        success: true,
        greeting: "Hello From Sandeep K. Dasari",
    })
}

