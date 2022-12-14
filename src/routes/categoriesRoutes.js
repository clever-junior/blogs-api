const express = require('express');

const router = express.Router();

const controller = require('../controllers/categoriesController');

const authMiddlewares = require('../middlewares/auth');

// const categoriesMiddlewares = require('../middlewares/categoriesMiddlewares');

router.get('/categories', authMiddlewares.validateToken, controller.index);

router.post('/categories', authMiddlewares.validateToken, controller.store);

module.exports = router;