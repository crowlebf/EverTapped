var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5500;

// ROUTES
var router = express.Router();
router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  request('https://api.brewerydb.com/v2/beers/?name=Coors%20Light&key=ed6c6f5871daaf66b2e594ed46cc735c&format=json', function(err, response, body) {
    res.json(JSON.parse(body).data)
  })
});

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
