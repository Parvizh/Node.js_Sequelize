const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const errorHandler = require('../helpers/error_handler');

exports.createUser = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    try {
        if (!email || !firstName || !lastName || !password) return errorHandler(res, 400, "Please add email or another");
        User.create({ email, firstName, lastName, password }).then((user) => {
            const token = jwt.sign({ id: user.id.toString() }, process.env.JWT_SECRET_KEY, { expiresIn: '10d' });
            res.status(200).json({
                success: 0,
                user,
                token
            })
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
        console.log(error.message)
    }
}

exports.getPostByUser = async (req, res) => {
    const { id } = req.user
    try {
        const user = await User.findOne({
            where: { id },
            include: [{
                model: Post,
                as: 'posts',
                where: { userId: id }
            }]
        })
        res.status(200).json({
            success: 0,
            user
        })
    } catch (error) {
        errorHandler(res, 500, error.message)
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Post,
                as: 'posts',
                attributes: ['title']
            }]
        })
        res.status(200).json({
            success: 0,
            users
        })
    } catch (error) {
        errorHandler(res, 500, error.message);
    }
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.destroy({
            where: { id },
            include: ['posts']
        })
        res.status(200).json({
            success: 0,
            message: "successfully deleted user"
        })
    } catch (error) {
        errorHandler(res, 500, error.message);
    }
}