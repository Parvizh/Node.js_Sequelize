const express = require('express');
const router = express.Router();
const {createUser,getPostByUser,getAllPost,deleteUser} = require('../controllers/user');

router.post('/',createUser);
router.get('/posts',getAllPost);
router.get('/:id',getPostByUser);
router.delete('/:id',deleteUser);

module.exports = router;