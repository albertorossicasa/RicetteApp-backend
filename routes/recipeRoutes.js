const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/recipes', recipeController.getRecipes);
router.get('/recipes/:id', recipeController.getRecipeById);

router.post('/recipes', recipeController.addRecipe);  // Route per aggiungere una nuova ricetta

module.exports = router;
