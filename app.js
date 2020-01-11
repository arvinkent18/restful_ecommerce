
/**
 * express module
 * @const
 */
const express = require('express');
/**
 * express application
 * @type {object}
 * @const
 */
const app = express();
/**
 * morgan module
 * @const
 */
const morgan = require('morgan');
/**
 * body parser module
 * @const
 */
const bodyParser = require('body-parser');
/**
 * mongoose module
 * @const
 */
const mongoose = require('mongoose');
/**
 * sellers routes
 * @const
 */
const sellerRoutes = require('./api/routes/sellers');
/**
 * products routes
 * @const
 */
const productRoutes = require('./api/routes/products');
/**
 * carts routes
 * @const
 */
const cartRoutes = require('./api/routes/carts');

/**
 * sellers routes
 * @param String MONGO_URI - Database
 */
mongoose.connect(process.env.MONGO_ATLAS_URI, { 
    useNewUrlParser: true,  
    useUnifiedTopology: true, 
    useCreateIndex: true }
)
.catch(error => console.log(error));
mongoose.Promise = global.Promise;

/**
 * middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * cors handler
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/**
 * middlewares
 */
app.use('/sellers', sellerRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);

/**
 * error handler for 404
 */
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

/**
 * error handler for 500
 */
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;