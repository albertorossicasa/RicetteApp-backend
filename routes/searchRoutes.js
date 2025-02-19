const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=YOUR_SPOONACULAR_API_KEY`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
