const Sequelize = require('sequelize');

const sequelize = new Sequelize("//name", "//user", "//password", {
    dialect: "mysql",
    host: "0.0.0.0"
});

const sequelizeLocal = new Sequelize("Multiple", "root", "", {
    dialect: "mysql",
    host: "127.0.0.1"
})


module.exports =  {
    sequelize,
    sequelizeLocal
};