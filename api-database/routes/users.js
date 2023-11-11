const usersModel = require('../model/users')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',async (req, res, next) => {
  try {
    const datas = await usersModel.getAllUsers();
    res.json({
      message: "get all user success from database",
      data: datas
    })
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    })
  }
});

/* POST user listing. */
router.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    await usersModel.createNewUsers(body);
    res.json({
      message: "create user success",
      data: body
    })
  } catch (err) {
    res.status(500).json({
      message: 'server error',
      serverMessage: err,
    })
  }
});

router.patch('/:id', function(req, res, next) {
  const {id} = req.params;
  console.log('id: ', id);
  res.json({
    message: "update user success",
    data: req.body
  });
});

router.delete('/:id', function(req, res, next) {
  const {id} = req.params;
  console.log('id: ', id);
  res.json({
    message: "delete user success",
    data: {
      id: id,
      name: "nino",
      rola: "user",
      email: "nino12@gmail.com",
      description: "akses untuk user"

    }
  });
});

module.exports = router;
