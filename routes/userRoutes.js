const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route for user registration
router.post('/register', userController.registerUser);

// POST route for user login
router.post('/login', userController.loginUser);

// GET route to retrieve user profile
router.get('/profile', userController.getUserProfile);

// PUT route to update user profile
router.put('/profile', userController.updateUserProfile);

// DELETE route to delete a user
router.delete('/delete', userController.deleteUser);

module.exports = router;
