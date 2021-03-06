var express = require('express');
var router = express.Router();
var User   = require('../models/user'); // get our mongoose model

/* GET home page. */
router.get('/', function(req, res, next) {

  // create a sample user
  var nick = new User({
    name: 'Nick Cerminara',
    password: 'password',
    admin: true
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

module.exports = router;
