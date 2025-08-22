const express = require('express');
const router = express.Router();
const ownerOnly=require("../middlewares/ownerOnly.js")
const authenticate=require("../middlewares/authenticate.js")

// Import controllers
const UserController = require('../controllers/userControllers');
const LoginController = require('../controllers/loginControllers');
const HouseController = require('../controllers/houseControllers');

// Login routes
router.post('/login', LoginController.login);
router.post('/register', LoginController.register);

// User routes
app.use(authenticate)
router.get('/users', UserController.findAll);
router.get('/users/:id', UserController.findOne);
router.put('/users/:id',ownerOnly, UserController.update);
router.delete('/users/:id',ownerOnly, UserController.delete);

// House routes
router.get('/houses', HouseController.findAll);
router.get('/houses/:id', HouseController.findOne);
router.post('/houses/:userId',ownerOnly, HouseController.create);
router.put('/houses/:id/:userId',ownerOnly, HouseController.update);
router.delete('/houses/:id',ownerOnly, HouseController.delete);

module.exports = router;