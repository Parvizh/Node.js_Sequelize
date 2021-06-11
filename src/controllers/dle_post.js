const Dle_Post = require('../models/dle_post');
const errorHandler = require('../helpers/error_handler');

exports.getAllDle_Post = async (req, res) => {
    try {
        const posts = await Dle_Post.findAll({})
        res.status(200).json({
            success: 0,
            posts
        })
    } catch (error) {
        errorHandler(res, 500, error.message);
    }
}