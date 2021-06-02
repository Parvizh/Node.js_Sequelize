const MultiUser = require('../models/multiUser');
const errorHandler = require('../helpers/error_handler');

exports.createMultiUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        if (!email || !name) return errorHandler(res, 400, "Please add email or another");
        MultiUser.create({ email, name, }).then((user) => {
            res.status(200).json({
                success: 0,
                user
            })
        }).catch((error)=>{
            return errorHandler(res,400,error.message)
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}