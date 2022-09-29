const express = require('express');
const router = express.Router()
const userRoute = require('./user');
const courseRoute = require('./course');
const questionRoute = require('./question');
const assessmentRoute = require('./assessment');
const verifyToken = require('../middlewares/auth');

router.use('/user', userRoute);
router.use('/course', verifyToken, courseRoute);
router.use('/question', verifyToken, questionRoute);
router.use('/assessment', verifyToken,assessmentRoute);

module.exports = router;