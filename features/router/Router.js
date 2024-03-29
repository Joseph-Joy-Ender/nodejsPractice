const express = require('express');
const router = express.Router();
const {register, login, deleteUser} = require('../controller/userController');


router.route('/register').post(register);
router.route('/login').post(login)
router.route('/deleteUser').delete(deleteUser)

module.exports = router;