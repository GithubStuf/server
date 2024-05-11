const router = require('express').Router();
const Controller = require('../Controllers/Auth_Controller');
const { verifyTokenAndAuthorization } = require('../Controllers/verifyToken');

router.post('/register', Controller.addUser);
router.post('/login', Controller.authUser);
router.post('/',verifyTokenAndAuthorization, Controller.userData);


module.exports = router;