const { sequelize } = require('../config/sequelize')
const Sequelize = require('sequelize');

const Workers = sequelize.define('Workers', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    adminId:Sequelize.INTEGER,
    workerId:Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: true,
    sequelize
});

module.exports = Workers;