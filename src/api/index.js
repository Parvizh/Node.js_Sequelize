const express = require('express');
const router = express.Router();

const user = require('../routers/user')
const post = require('../routers/post')
const multiUser = require('../routers/multiUser');
const likes = require('../routers/likes');
const dle_post = require('../routers/dle_post')
const worker = require('../routers/worker')

router.use("/user",user);
router.use("/post",post);
router.use("/multi",multiUser);
router.use("/like",likes);
router.use("/worker",worker)
router.use('/dle_post',dle_post)

module.exports = router;