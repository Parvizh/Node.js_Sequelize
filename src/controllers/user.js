const db = require('../models/index');
const errorHandler = require('../helpers/error_handler');

exports.createUser = async(req, res) => {
    const { email, firstName, lastName } = req.body;
    try {
        if (!email || !firstName || !lastName) return errorHandler(res, 400, "Please add email or another");
        User.create({ email, firstName, lastName }).then((user) => {
            res.status(200).json({
                success: 0,
                user
            })
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
        console.log(error.message)
    }
}