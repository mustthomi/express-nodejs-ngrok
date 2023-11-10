var express = require('express');
var router = express.Router();

const db = require('../config/database')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query(`SELECT * FROM users`, async (err, result) => {
    const data = await JSON.parse(JSON.stringify(result));
    res.json({
    message: "database connected",
    data: data.rows
   })
  })
});

module.exports = router;
