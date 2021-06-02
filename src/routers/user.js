const express = require('express');
const router = express.Router();
const {createUser,getPostByUser,getAllPost} = require('../controllers/user');

router.post('/',createUser);
router.get('/posts',getAllPost);
router.get('/:id',getPostByUser);

module.exports = router;