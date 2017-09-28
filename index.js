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

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });