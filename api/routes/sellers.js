/**
 * express module
 * @const
 */
const express = require('express');
/**
 * express router to mount user related functions on.
 * @type {object}
 * @const
 */
const router = express.Router();

/**
 * mongoose module
 * @const
 */
const mongoose = require('mongoose');

/**
 * Seller model
 * @const
 */
const Seller = require('../models/seller');
/**
 * Product model
 * @const
 */
const Product = require('../models/product');

/**
 * Route serving rendering sellers.
 * @name get//
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 */
router.get('/', (req, res, next) => {
    Seller.find()
        .exec()
        .then(result => {
            console.log(result);
            const response = {
                count: result.length,
                sellers: result.map(result => {
                    return {
                        name: result.name,
                        _id: result._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:5000/sellers/' + result._id
                        }
                    }
                })
            };
            if (result.length >=0) {
                res.status(200).json(response);
            } else {
                res.status(200).json({
                    message: 'No entries found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Route serving creating sellers.
 * @name post//
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 */
router.post('/', (req, res, next) => {
    const seller = new Seller({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    seller
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Seller created',
                createdSeller: {
                    name: result.name,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/sellers/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500),json({
                error: err
            });
        });
});

/**
 * Route serving creating seller product.
 * @name post//:sellerId/product/create
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 */
router.post('/:sellerId/product/create', (req, res, next) => {
    const createProduct = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        seller: req.params.sellerId
    });
    createProduct
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Product created',
                createdProduct: {
                    name: result.name,
                    description: result.description,
                    price: result.price,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/products/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500),json({
                error: err
            });
        });
});

/**
 * Route serving rendering seller information.
 * @name get//:sellerId
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 */
router.get('/:sellerId', (req, res, next) => {
    const id = req.params.sellerId;
    Seller.findById(id)
        .exec()
        .then(result => {
            console.log(result);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({message: 'No valid entry'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Route serving rendering seller's products.
 * @name get//:sellerId/products
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 */
router.get('/:sellerId/products', (req, res, next) => {
    Product.find({seller: req.params.sellerId})
        .exec()
        .then(result => {
            res.status(200).json({
                count: result.length,
                products: result.map(result => {
                    return {
                        name: result.name,
                        description: result.description,
                        price: result.price,
                        _id: result._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:5000/products/' + result._id
                        }
                    }
                })
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

/**
 * Route serving updating seller product.
 * @name patch//:sellerId/product/update/:productId
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 * @param {int}  productId - Product ID
 */
router.patch('/:sellerId/product/update/:productId', (req, res, next) => {
    const id = req.params.productId;
    const sellerId = req.params.sellerId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id: id, seller: sellerId}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/' + sellerId + 'products/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Route serving deleting seller product.
 * @name delete//:sellerId/product/update/:productId
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 * @param {int}  productId - Product ID
 */
router.delete('/:sellerId/product/delete/:productId', (req, res, next) => {
    const id = req.params.productId;
    const sellerId = req.params.sellerId;
    Product.deleteOne({_id: id, seller: sellerId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5000/sellers/' + sellerId + '/products',
                    body: {
                        name: 'String'
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Route serving updating seller information.
 * @name patch//:sellerId/update
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 */
router.patch('/:sellerId/update', (req, res, next) => {
    const id = req.params.sellerId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Seller.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Seller updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/sellers/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Route serving deleting seller.
 * @name delete//:sellerId/product/update/:productId
 * @function
 * @memberof module:routers/sellers~sellersRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 */
router.delete('/:sellerId', (req, res, next) => {
    const id = req.params.sellerId;
    Seller.deleteOne({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Seller deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5000/sellers/',
                    body: {
                        name: 'String'
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;

