const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares/auth')
const {createUser,getPostByUser,getAllPost,deleteUser} = require('../controllers/user');

router.post('/',createUser);
router.get('/posts',getAllPost);
router.get('/byUser',auth,getPostByUser);
router.delete('/:id',deleteUser);

module.exports = router;