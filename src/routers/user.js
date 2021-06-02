const express = require('express');
const router = express.Router();
const {createUser,getPostByUser} = require('../controllers/user');

router.post('/',createUser);
router.get('/:id',getPostByUser);

module.exports = router;