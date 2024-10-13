const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const productController = require('../controllers/productController');
const productDetailController = require('../controllers/product_detailController');

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.post('/login', userController.login);
router.delete('/users/:id', userController.deleteUser);

// Post routes
router.post('/users/:userId/posts', postController.createPost);
router.get('/users/:userId/posts', postController.getUserPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

// Product routes
router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// Product_detail routes
router.post('/products/:productId/details', productDetailController.createProductDetail);
router.get('/products/:productId/details', productDetailController.getProductDetails);
router.get('/details/:id', productDetailController.getProductDetailById);
router.put('/details/:id', productDetailController.updateProductDetail);
router.delete('/details/:id', productDetailController.deleteProductDetail);

module.exports = router;
