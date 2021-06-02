// module.exports = (sequelize, DataTypes) => {
//     const Post = sequelize.define('Post', {
//         title: DataTypes.STRING,
//         context: DataTypes.STRING,
//         userId: DataTypes.INTEGER
//     }, {
//         freezeTableName: true,
//         timestamps: true,
//         sequelize
//     });
//     Post.associate = function (models) {
//         Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
//     };
//     return Post;
// };

const {sequelize} = require('../config/sequelize');
const Sequelize = require('sequelize');

const Post = sequelize.define('Post', {
    title: Sequelize.STRING,
    context: Sequelize.STRING,
    userId: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: true,
    sequelize
});


// Post.belongsTo(User, { foreignKey: 'userId' })

module.exports = Post;