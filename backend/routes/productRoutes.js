const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

 // all

 router.get('/products' , productController.getAllProducts);
 router.post('/products',productController.addProduct);
 router.get('/products/:id',productController.getProductById);
 router.put('/products/:id',productController.EditProduct);

 router.delete('/products/:id',productController.deleteProduct);

module.exports = router;