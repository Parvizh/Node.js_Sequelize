const Likes = require('../models/likes');
const Post = require('../models/post');
const errorHandler = require('../helpers/error_handler');
const sequelize = require('sequelize')

exports.likePost = async (req, res) => {
    const { postId } = req.body;
    const { id: userId } = req.user;
    try {
        const post = await Post.findOne({ where: { id: postId } })
        if (!post) return errorHandler(res, 400, "This post doesnt exist")
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

exports.getPostsadnLikes = async (req, res) => {
    try {
        const likedUser = await Likes.findAll({
            attributes: {
                include: [[sequelize.fn('COUNT', sequelize.col('Likes.userId')), 'likes_count'], "likeId"],
                exclude: ['userId', 'postId']
            },
            include: [{
                model: Post,
                attributes: { exclude: ['userId',] }
            }],
            order: [['createdAt', 'DESC']],
            group: ['Likes.postId']
        })
        res.status(200).json({
            success: 0,
            likedUser
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}

exports.getPostById = async (req, res) => {
    try {

    } catch (error) {

    }
}