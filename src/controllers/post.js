const Post = require('../models/post');
const User = require('../models/user')
const errorHandler = require('../helpers/error_handler');

exports.createPost = async (req, res) => {
    const { title, context, userId } = req.body;
    try {
        if (!title || !context || !userId) return errorHandler(res, 400, "Please fill form");
        const user = await User.findOne({where:{id:userId}});
        if(!user) return errorHandler(res,400,"This user dosnt exist")
        const post = await Post.create({ title, context, userId })
        res.status(200).json({
            success: 0,
            post
        })

    } catch (error) {
        errorHandler(res, 500, error.message)
        console.log(error.message)
    }
}