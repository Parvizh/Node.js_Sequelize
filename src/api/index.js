const express = require('express');
const router = express.Router();

const user = require('../routers/user')

router.use("/user",user);

module.exports = router;