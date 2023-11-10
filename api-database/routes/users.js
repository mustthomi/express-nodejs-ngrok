var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = []
  res.json({
    message: "get all user success",
    data: data
  });
});

/* POST user listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({
    message: "create user success",
    data: req.body
  });
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
