
const express = require('express');
const LoginController = require("../controllers/loginController")
const UserController = require('../controllers/userController');
const KostController = require('../controllers/kostController');
const RoomController = require('../controllers/roomController');
const TransactionController = require('../controllers/transactionController');

const router = express.Router();

router.post("/login", LoginController.login);

// User routes
router.get('/users', UserController.findAll);
router.get('/users/:id', UserController.findOne);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

// Kost routes
router.get('/kosts', KostController.findAll);
router.get('/kosts/:id', KostController.findOne);
router.post('/kosts', KostController.create);
router.put('/kosts/:id', KostController.update);
router.delete('/kosts/:id', KostController.delete);

// Room routes
router.get('/rooms', RoomController.findAll);
router.get('/rooms/:id', RoomController.findOne);
router.post('/rooms', RoomController.create);
router.put('/rooms/:id', RoomController.update);
router.delete('/rooms/:id', RoomController.delete);

// Transaction routes
router.get('/transactions', TransactionController.findAll);
router.get('/transactions/:id', TransactionController.findOne);
router.post('/transactions', TransactionController.create);
router.put('/transactions/:id', TransactionController.update);
router.delete('/transactions/:id', TransactionController.delete);

module.exports = router;
