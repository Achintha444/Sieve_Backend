const express = require('express');

const privacyNewsController = require('../controllers/privacyNewsController');

const router = express.Router();

/* GET users listing. */

router.post('/view_all',privacyNewsController.view_all);

module.exports = router;
