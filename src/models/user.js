// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         email: DataTypes.STRING,
//         firstName: DataTypes.STRING,
//         lastName: DataTypes.STRING,
//     }, {
//         freezeTableName: true,
//         timestamps: true,
//         sequelize
//     });
//     User.associate = function (models) {
//         User.hasMany(models.Post, { as: "posts" })
//     };
//     return User;
// };

const {sequelize} = require('../config/sequelize');
const Sequelize = require('sequelize');

const User = sequelize.define('User', {
    email: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
}, {
    freezeTableName: true,
    timestamps: true,
    sequelize
});

// User.hasMany(Post, { as: "posts", foreignKey: 'userId' })

module.exports = User;