const express = require('express');
const router = express.Router();
const {createMultiUser} = require('../controllers/multiUser');

router.post('/',createMultiUser);

module.exports = router;