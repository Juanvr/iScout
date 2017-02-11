var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
   //res.render('register', { title: 'Express' });
  //res.send('respond with a cool resource');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

module.exports = router;
