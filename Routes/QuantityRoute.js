const router = require('express').Router();

const Controller = require('../Controllers/Quantity_Controller');

const { verifyTokenAndAdmin, verifyToken } = require('../Controllers/verifyToken');


//New Order
router.post('/new', verifyToken, Controller.newQty);

/*GET USER
router.get('/:userId', verifyTokenAndAuthorization, Controller.getUserOrders);*/

//GET ALL USER
router.get('/', verifyTokenAndAdmin, Controller.getAllQty);

module.exports = router;
