const User = require('../models/user');
const Post = require('../models/post');
const Likes = require('../models/likes');
const Workers = require('../models/workers')

User.hasMany(Post, { as: "posts", foreignKey: 'userId' })
User.belongsToMany(Post, {through:Likes,foreignKey:'userId'})//Likes Model
User.belongsToMany(User,{through:Workers,as:'workers',foreignKey:'adminId'})//Worker Model
User.belongsToMany(User,{ through:Workers,as:'admin',foreignKey:'workerId'})//Worker Model
Post.belongsTo(User, { foreignKey: 'userId' })
Post.belongsToMany(User, {through:Likes,foreignKey:'postId'})//Likes Model
Likes.belongsTo(User,{foreignKey:'userId'})//Likes Model
Likes.belongsTo(Post,{foreignKey:'postId'})//Likes Model
Workers.belongsTo(User,{as:'admin'})//Worker Model
Workers.belongsTo(User,{as:'worker'})//Worker Model