const User = require('../models/user');
const Post = require('../models/post');
const Likes = require('../models/likes');

User.hasMany(Post, { as: "posts", foreignKey: 'userId' })
User.belongsToMany(Post, {through:Likes,foreignKey:'userId'})//Likes Model
Post.belongsTo(User, { foreignKey: 'userId' })
Post.belongsToMany(User, {through:Likes,foreignKey:'postId'})//Likes Model
Likes.belongsTo(User,{foreignKey:'userId'})//Likes Model
Likes.belongsTo(Post,{foreignKey:'postId'})//Likes Model