// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));


// globals
var port = process.env.PORT || 7500;

// spin up server
app.listen(port, function() {
	console.log('server listening on:', port);
});


app.get('/', function(req, res) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('views/index.html'));
});
