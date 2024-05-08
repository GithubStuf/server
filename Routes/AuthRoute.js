const router = require('express').Router();
const Controller = require('../Controllers/Auth_Controller')

router.post('/register', Controller.addUser);
router.post('/login', Controller.authUser);


module.exports = router;