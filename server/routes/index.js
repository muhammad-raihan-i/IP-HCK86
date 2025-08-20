const express = require('express');
const userController = require('./controllers/userController');
const kostController = require('./controllers/kostController');
const roomController = require('./controllers/roomController');
const transactionController = require('./controllers/transactionController');

const router = express.Router();

// User routes
router.get('/users', userController.findAll);
router.get('/users/:id', userController.findOne);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

// Kost routes
router.get('/kosts', kostController.findAll);
router.get('/kosts/:id', kostController.findOne);
router.post('/kosts', kostController.create);
router.put('/kosts/:id', kostController.update);
router.delete('/kosts/:id', kostController.delete);

// Room routes
router.get('/rooms', roomController.findAll);
router.get('/rooms/:id', roomController.findOne);
router.post('/rooms', roomController.create);
router.put('/rooms/:id', roomController.update);
router.delete('/rooms/:id', roomController.delete);

// Transaction routes
router.get('/transactions', transactionController.findAll);
router.get('/transactions/:id', transactionController.findOne);
router.post('/transactions', transactionController.create);
router.put('/transactions/:id', transactionController.update);
router.delete('/transactions/:id', transactionController.delete);

module.exports = router;
