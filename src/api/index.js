const express = require('express');
const router = express.Router();

const user = require('../routers/user')
const post = require('../routers/post')
const multiUser = require('../routers/multiUser');

router.use("/user",user);
router.use("/post",post);
router.use("/multi",multiUser);

module.exports = router;