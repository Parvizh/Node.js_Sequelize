const User = require('../models/user');
const Post = require('../models/post');

User.hasMany(Post, { as: "posts", foreignKey: 'userId' })
Post.belongsTo(User, { foreignKey: 'userId' })