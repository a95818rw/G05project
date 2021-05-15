var express = require('express');
var router = express.Router();

var parkController = require('../controllers/prakController');

router.get('/', parkController.getEntrancepage);
router.get('/login', parkController.login);
router.get('/register', parkController.register);
router.get('/introduce', parkController.introduce);
router.get('/map', parkController.map);
router.get('/playground', parkController.playground);

//redirect
router.get('/adduser', parkController.adduser);
router.get('/loginConfirm', parkController.loginConfirm);
router.post('/addLiked', parkController.addLiked);


router.get('/temp', parkController.temp);

module.exports = router;