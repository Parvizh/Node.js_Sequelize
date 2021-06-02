const { sequelizeLocal } = require('../config/sequelize')
const Sequelize = require('sequelize');

const MultiUser = sequelizeLocal.define('MultiUser', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: { isEmail: {
            msg:"email is false"
        } }
    }
}, {
    freezeTableName: true,
    timestamps: true,
    sequelizeLocal
});

module.exports = MultiUser;