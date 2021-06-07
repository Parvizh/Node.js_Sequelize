const express = require('express');
const router = express.Router();
const { likePost, getPostsadnLikes } = require('../controllers/likes');
const { auth } = require('../middlewares/auth')

router.post('/', auth, likePost);
router.get('/:id', auth,getPostsadnLikes);

module.exports = router;