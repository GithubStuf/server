const router = require('express').Router();
const Controller = require('../Controllers/Auth_Controller');
const { verifyTokenAndAuthorization } = require('../Controllers/verifyToken');

router.post('/register', Controller.addUser);
router.post('/login', Controller.authUser);
router.get('/',verifyTokenAndAuthorization, Controller.userData);


module.exports = router;