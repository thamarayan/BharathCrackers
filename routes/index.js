var express = require('express');
var router = express.Router();
var Product = require('../modals/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bharath Crackers' });
});

router.get('/aboutus', function(req, res, next){
  res.render('aboutus', { title: 'Bharath Crackers' });
});

router.get('/shop', function(req, res, next){
  Product.find(function(err,docs){
    res.render('shop', { title: 'Bharath Crackers', products:docs });
    console.log(docs);
  }).lean();
  
  
});
module.exports = router;
