var express = require('express');
var router = express.Router();

/* GET index listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(process.env.TEST);
});

module.exports = router;
