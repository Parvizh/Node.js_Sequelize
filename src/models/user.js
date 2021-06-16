const {sequelize} = require('../config/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs')

const User = sequelize.define('User', {
    email: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    password:  Sequelize.STRING,
}, {
    freezeTableName: true,
    timestamps: true,
    sequelize
});

User.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => {
            throw new Error();
        });
});

module.exports = User;