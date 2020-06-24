var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET food page. */
router.get('/select-food', function(req, res, next) {
  res.render('food', req.query);
});


module.exports = router;
