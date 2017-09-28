const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/wwwroot';

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('wwwroot'));

app.get('/', function(res, res) {
	res.sendFile(path + '/index.html', function (err) {

	});
})

app.listen(7000);