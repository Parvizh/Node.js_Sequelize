const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const {addWorker,getWorkers,getAdmin}= require('../controllers/workers');

router.post('/',auth,addWorker);
router.get('/',auth,getWorkers)
router.get('/workerAndAdmin',getAdmin)

module.exports = router;