var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var logic = require('./../public/javascripts/logic.js');
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var crypto = require("crypto");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nurse Brain 2' });
});

router.get('/calc', function(req, res, next) {
  res.render('calculations/calc');
});

router.get('/dosecalc', function(req, res, next) {
  res.render('calculations/dosecalc');
});

router.post('/dosecalc', function(req, res, next) {
  var wtordered = req.body.wtordered;
  var weight = req.body.weight;
  var wtunit = req.body.wtunit;
  if (wtunit === "kg") {
  var final = wtordered * weight;
  }
  else {
  var final = wtordered * weight * 0.453592;
  }
  res.render('calculations/dosecalc', {title: 'Nurse Brain 2',
  wtordered: wtordered,
  weight: weight,
  final: Math.abs(Math.round(final)) + ' mg'
  });
});

router.post('/dosecalc2', function(req, res, next) {
  var liqordered = req.body.liqordered;
  var liqavailable = req.body.liqavailable;
  var volume = req.body.volume;
  if (liqordered.length <=0 || liqavailable.length <= 0 || volume.length <= 0) {
    var liqfinal = "Check numbers."
  }
  else if (liqordered <= 0 || liqavailable <= 0 || volume <= 0) {
    var liqfinal = "Check numbers."
  }
  else {
    var liqfinal = Math.abs(((liqordered * volume)/liqavailable).toFixed(2)) + ' mL';
  }
  res.render('calculations/dosecalc', {title: 'Nurse Brain 2',
  liqordered: liqordered,
  liqavailable: liqavailable,
  volume: volume,
  liqfinal: liqfinal
  });
});

router.post('/dosecalc3', function(req, res, next) {
  var solidord = req.body.solidord;
  var solidavail = req.body.solidavail;
  if (solidord.length <= 0 || solidavail.length <= 0) {
    var solidfinal = "Check numbers."
  }
  else if (solidord <= 0 || solidavail <= 0) {
    var solidfinal = "Check numbers."
  }
  else {
    var solidfinal = (solidord/solidavail).toFixed(2);
  }
  res.render('calculations/dosecalc', {title: 'Nurse Brain 2',
  solidord: solidord,
  solidavail: solidavail,
  solidfinal: solidfinal
});
});

router.get('/ivdrip', function(req, res, next) {
  res.render('calculations/ivdrip');
});

router.post('/ivdrip', function(req, res, next) {
  var ivtime = req.body.ivtime;
  var ivvolume = req.body.ivvolume;
  var hours = req.body.hours;
  var minutes = req.body.minutes;
  if (hours && ivtime > 0) {
    var final = (ivvolume/ivtime).toFixed(2) + ' hr/min';
  }
  else if (minutes && ivtime > 0) {
    var final = (ivvolume/(ivtime/60)).toFixed(2) + ' hr/min';
  }
  else {
    var final = "Check numbers."
  }
  res.render('calculations/ivdrip', {title: 'Nurse Brain 2',
  ivtime: ivtime,
  ivvolume: ivvolume,
  final: final
});
});

router.post('/ivdrip2', function(req, res, next) {
  var ivvol = req.body.ivvol;
  var ivrate = req.body.ivrate;
  if (ivvol.length <= 0 || ivrate.length <= 0) {
    var ivans = "Check numbers."
  }
  else if (ivvol <= 0 || ivrate <= 0) {
    var ivans = "Check numbers."
  }
  else {
    var ivans = Math.abs((ivvol/ivrate)).toFixed(2) + ' hours';
  }
  res.render('calculations/ivdrip', {title: 'Nurse Brain 2',
  ivvol: ivvol,
  ivrate: ivrate,
  ivans: ivans
});
});

router.get('/goodrx', function(req, res, next) {
  res.render('goodrx/goodrx');
});

router.post('/goodrx', function(req, res, next) {
  var search = req.body.search;
  var upfirst = search.charAt(0).toUpperCase() + search.slice(1);
  var payload = 'name=' + upfirst + '&api_key=' + process.env.GOODRX_API
  var base64 = crypto.createHmac('SHA256',process.env.GOODRX_SECRET_KEY).update(payload).digest('base64');
  var sig = base64.replace(/\//g, '_').replace(/\+/g, '_');
  if (search.length = 0) {
    var result = "Please enter a drug."
  }
  else {
    var result = 'https://api.goodrx.com/compare-price?' + payload + '&sig=' + sig;
    unirest.get(result)
    .type('json')
    .send({
      api_key: process.env.GOODRX_API,
      sig: process.env.GOODRX_SECRET_KEY,
      name: search,
    })
    .end(function (response) {
      res.render('goodrx/goodrx', {
        title: 'Nurse Brain 2',
        search: search,
        response: response.body
      });
    })
  }
});

router.get('/drugsearch', function(req, res, next) {
  res.render('drugsearch/drugsearch');
});

module.exports = router;
