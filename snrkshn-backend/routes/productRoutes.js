// routes/productRoutes.js

const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

module.exports = router;
