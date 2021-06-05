const express = require('express');
const router = express.Router();

const user = require('../routers/user')
const post = require('../routers/post')
const multiUser = require('../routers/multiUser');
const likes = require('../routers/likes');

router.use("/user",user);
router.use("/post",post);
router.use("/multi",multiUser);
router.use("/like",likes);

module.exports = router;