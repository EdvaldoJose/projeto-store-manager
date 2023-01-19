const productsRouter = require('express').Router();
// const Route = require('express/lib/router/route');
const productController = require('../controllers/productController');
const { validateName } = require('../middlewares/validation');

// const productsRoute = Router();

// productsRouter.get('/search', productController.searchProduct);
// productsRouter.get('/', productController.getAllProducts);
// productsRouter.get('/:id', productController.getProductFromId);
// productsRouter.post('/', validateName, productController.insertProduct);
// productsRouter.put('/id:', validateName, productController.updateProduct);
// productsRouter.delete('/:id', productController.deleteProduct);

module.exports = {
  productsRouter,
};