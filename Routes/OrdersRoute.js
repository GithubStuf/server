const router = require('express').Router();

const Controller = require('../Controllers/Orders_Controller');

const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('../Controllers/verifyToken');


//New Order
router.post('/new', verifyToken, Controller.newOrder);

//GET USER
router.get('/:userId', verifyTokenAndAuthorization, Controller.getUserOrders);

//GET ALL USER
router.get('/all', verifyTokenAndAdmin, Controller.getAllOrders);

module.exports = router;