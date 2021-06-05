const { sequelize } = require('../config/sequelize');
const Sequelize = require('sequelize');

const Likes = sequelize.define('Likes', {
    likeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: Sequelize.INTEGER,
    postId: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: true,
    sequelize
});

module.exports = Likes;