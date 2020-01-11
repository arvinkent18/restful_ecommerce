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
 * cart module
 * @const
 */
const Cart = require('../models/cart');
/**
 * report module
 * @const
 */
const Report = require('../models/report');

/**
 * Route serving rendering orders in cart.
 * @name get//
 * @function
 * @memberof module:routers/orders~ordersRouter
 * @inner
 */
router.get('/', (req, res, next) => {
    Cart.find()
        .populate('product')
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
 * Route serving creating items in cart.
 * @name post//
 * @function
 * @memberof module:routers/carts~cartsRouter
 * @inner
 */
router.post('/', (req, res, next) => {
    const cart = new Cart({
        _id: mongoose.Types.ObjectId(),
        product: req.body.productId,
        quantity: req.body.quantity
    });
    cart
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Cart and Report created',
                createdCart: {
                    _id: result._id,
                    product: result.product,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/cart/' + result._id
                    }
                }
            });
            const report = new Report({
                _id: mongoose.Types.ObjectId(),
                product: cart.product._id,
                seller: result.seller._id
            });
            report.save();
        })
        .catch(err => {
            console.log(err);
            res.status(500),json({
                error: err
            });
        });
});

/**
 * Route serving deleting order in cart.
 * @name delete//:productId
 * @function
 * @memberof module:routers/carts~cartsRouter
 * @inner
 * @param {int}  sellerId - Seller's ID
 */
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Cart.deleteOne({product: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Order deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5000/carts',
                    body: {
                        product: 'String',
                        quantity: 'Number'
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