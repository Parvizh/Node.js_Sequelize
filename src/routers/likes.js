const express = require('express');
const router = express.Router();
const { likePost, getLikedUser } = require('../controllers/likes');
const { auth } = require('../middlewares/auth')

router.post('/', auth, likePost);
router.get('/:id', auth,getLikedUser);

module.exports = router;