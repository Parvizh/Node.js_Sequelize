const express = require('express');
const router = express.Router();
const {createPost} = require('../controllers/post');
const {auth} = require('../middlewares/auth')

router.post('/',auth,createPost);

module.exports = router;