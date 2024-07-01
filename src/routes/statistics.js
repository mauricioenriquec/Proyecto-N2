const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/posts-by-category', statisticsController.getPostsByCategory);

module.exports = router;
