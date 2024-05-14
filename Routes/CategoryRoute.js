const router = require('express').Router();

const { verifyTokenAndAdmin } = require('../Controllers/verifyToken');

const Controller = require('../Controllers/Category_Controller');

// Add Material
router.put('/new', verifyTokenAndAdmin, Controller.newCategory)

//GET ALL USER
router.get('/', verifyTokenAndAdmin, Controller.getAllCategories)

// //Delete
// router.delete('/:id', verifyTokenAndAuthorization, Controller.deleteUser)

// //GET USER
// router.get('/find/:id', verifyTokenAndAdmin, Controller.findUserById)



// //GET USER STATS
// router.get('/stats', verifyTokenAndAdmin, Controller.getUserStats)


module.exports = router;