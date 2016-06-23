var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', key: '' });
});

router.post('/submit', function(req, res, next){
  request.post({
    url: "https://payment-stage.allpay.com.tw/AioHelper/GenCheckMacValue",
    form: req.body,
  }, function(err, httpResponse, body){
    res.render('index', {title: 'Express', key: body})
  })
})

module.exports = router;
