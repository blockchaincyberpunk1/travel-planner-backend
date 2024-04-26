const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

// POST route to create a new travel plan
router.post('/', planController.createPlan);

// GET route to retrieve all travel plans
router.get('/', planController.getAllPlans);

// GET route to retrieve a specific travel plan by ID
router.get('/:id', planController.getPlanById);

// PUT route to update a travel plan by ID
router.put('/:id', planController.updatePlan);

// DELETE route to delete a travel plan by ID
router.delete('/:id', planController.deletePlan);

module.exports = router;
