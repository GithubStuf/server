const router = require('express').Router();

const Controller = require('../Controllers/Distribution_Controller');

const { verifyTokenAndAdmin, verifyToken } = require('../Controllers/verifyToken');


//New Order
router.post('/new', verifyToken, Controller.newDist);

/*GET USER
router.get('/:userId', verifyTokenAndAuthorization, Controller.getUserOrders);*/

//GET ALL USER
router.get('/', verifyTokenAndAdmin, Controller.getAllDist);

module.exports = router;
