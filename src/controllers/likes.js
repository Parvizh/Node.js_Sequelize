const Likes = require('../models/likes');
const User = require('../models/user');
const Post = require('../models/post');
const errorHandler = require('../helpers/error_handler');

exports.likePost = async (req, res) => {
    const { postId } = req.body;
    const { id: userId } = req.user;
    try {
        const post = await Post.findOne({ where: { id: postId } })
        if (!post) return errorHandler(res, 400, "This post dosnt exist")
        const isLiked = await Likes.findOne({ where: { postId, userId } })
        if (isLiked) return errorHandler(res, 400, "you already liked this post")
        const likes = await Likes.create({ postId, userId });
        res.status(200).json({
            success: 0,
            likes
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}

exports.getLikedUser = async (req, res) => {
    const { id: postId } = req.params;
    try {
        const likedUser = await Likes.findAll({
            attributes: ['likeId'], include: [{
                model: User,
                where: { id: postId }
                // as: "posts"
            }]
        })
        res.status(200).json({
            success: 0,
            likedUser
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}