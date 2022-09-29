const express = require('express');
const router = express.Router();
const questionController = require('../../controllers/question');

router.post('/', questionController.create);

module.exports = router;

