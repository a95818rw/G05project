var express = require('express');
var router = express.Router();

var parkController = require('../controllers/prakController');

router.get('/', parkController.getEntrancepage);
router.get('/login', parkController.login);
router.get('/register', parkController.register);
router.get('/introduce', parkController.introduce);
router.get('/map', parkController.map);
router.get('/playground', parkController.playground);
router.get('/liked', parkController.liked);

//redirect
router.post('/adduser', parkController.adduser);
router.post('/loginConfirm', parkController.loginConfirm);
router.post('/addLiked', parkController.addLiked);
router.post('/deleteliked', parkController.deleteliked);

module.exports = router;