const express = require('express');
const router = express.Router();

// Import controllers
const UserController = require('../controllers/userControllers');
const LoginController = require('../controllers/loginControllers');
const HouseController = require('../controllers/houseControllers');

// Login routes
router.post('/login', LoginController.login);
router.post('/register', LoginController.register);

// User routes
router.get('/users', UserController.findAll);
router.get('/users/:id', UserController.findOne);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

// House routes
router.get('/houses', HouseController.findAll);
router.get('/houses/:id', HouseController.findOne);
router.post('/houses/:userId', HouseController.create);
router.put('/houses/:id/:userId', HouseController.update);
router.delete('/houses/:id', HouseController.delete);

module.exports = router;
