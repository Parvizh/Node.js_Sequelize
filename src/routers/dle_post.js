const express = require('express');
const router = express.Router();
const {getAllDle_Post} = require('../controllers/dle_post');

router.get('/',getAllDle_Post);

module.exports = router;