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
 * express Seller Model
 * @const
 */
const Seller = require('../models/seller');
/**
 * express module
 * @const
 */
const Product = require('../models/product');

/**
 * Route serving rendering products.
 * @name get//
 * @function
 * @memberof module:routers/products~productsRouter
 * @inner
 */
router.get('/', (req, res, next) => {
    Product.find()
        .populate('seller')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Route serving rendering product.
 * @name get//product
 * @function
 * @memberof module:routers/products~productsRouter
 * @inner
 * @param {int} productId - Product's ID
 */
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
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
 * Route serving searching product.
 * @name get//product
 * @function
 * @memberof module:routers/products~productsRouter
 * @inner
 * @param {String} name - Product's Name
 */
router.get('/search/:q', (req, res, next) => {
    const search = req.params.q;

    Product.find({ $or: [{ 'name' : new RegExp(search, 'i') }, { 'description': new RegExp(search, 'i') }] })
        .populate('seller')
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                count: result.length,
                products: result.map(result => {
                    return {
                        name: result.name,
                        seller: result.seller,
                        description: result.description,
                        price: result.price,
                        _id: result._id
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
})

module.exports = router;

