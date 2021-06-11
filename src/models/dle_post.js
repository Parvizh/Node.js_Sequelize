const { sequelize } = require('../config/sequelize');
const Sequelize = require('sequelize');

const Dle_Post = sequelize.define('dle_post', {
    autor:Sequelize.STRING,
    date:Sequelize.DATE,
    short_story:Sequelize.STRING,
    full_story:Sequelize.STRING,
    xfields:Sequelize.STRING,
    title:Sequelize.STRING,
    descr:Sequelize.STRING,
    keywords:Sequelize.STRING,
    category:Sequelize.STRING,
    alt_name:Sequelize.STRING,
    comm_num:Sequelize.INTEGER,
    allow_comm: Sequelize.INTEGER,
    allow_main: Sequelize.INTEGER,
    approve: Sequelize.INTEGER,
    fixed: Sequelize.INTEGER,
    allow_br: Sequelize.INTEGER,
    symbol: Sequelize.STRING,
    tags: Sequelize.STRING,
    metatitle:Sequelize.STRING
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Dle_Post;