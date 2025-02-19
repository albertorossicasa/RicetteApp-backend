const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  const ingredient = req.query.ingredient;
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=YOUR_SPOONACULAR_API_KEY`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
