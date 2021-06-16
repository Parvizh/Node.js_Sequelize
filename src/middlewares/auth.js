const jwt = require('jsonwebtoken')
const User = require('../models/user');
const errorHandler = require('../helpers/error_handler');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decoded.id)
        const user = await User.findOne({ where: { id: decoded.id } })
        if (!user) {
            return errorHandler(res, 400, 'User cant find');
        }
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        errorHandler(res, 400, e.message);
    }
}
module.exports = {auth}