const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  preparationTime: Number,
  instructions: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
