const Recipe = require('../models/recipe');

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Ricetta non trovata' });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      preparationTime: req.body.preparationTime,
      instructions: req.body.instructions,
    });
    await recipe.save();
    res.status(201).json({ message: 'Ricetta aggiunta con successo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
