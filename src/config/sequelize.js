const Sequelize=require('sequelize');

const sequelize = new Sequelize("Rahat", "root", "", {
    dialect: "mysql",
    host: "127.0.0.1"
});


module.exports=sequelize;