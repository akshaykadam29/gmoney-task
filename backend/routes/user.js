const express = require('express');
const userController = require('./../controller/user');

const router = express.Router();

// USER SIGNUP
router.post('/signup', userController.createUser);

// USER LOGIN
router.post('/login', userController.loginUser);


module.exports = router;
