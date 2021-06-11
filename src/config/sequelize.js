const Sequelize = require('sequelize');

const sequelize = new Sequelize("bctest_pervizapi", "bctest_pervizapi", "pervizapi123", {
    dialect: "mysql",
    host: "45.143.99.40"
});

const sequelizeLocal = new Sequelize("Multiple", "root", "", {
    dialect: "mysql",
    host: "127.0.0.1"
})


module.exports =  {
    sequelize,
    sequelizeLocal
};