var express = require('express');
var router = express.Router();

const userControler= require('../controler/users')

/* GET users listing. */
router.get('/', userControler.getAllUsers);

/* POST user listing. */
router.post('/', userControler.createNewUser);

router.patch('/:id', userControler.updateUser);

router.delete('/:id', userControler.deleteUser);

module.exports = router;
