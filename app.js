var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/mobileapp'));

/*app.get('/', function(req, res){
  res.sendfile('mobileapp/index.html');
});
*/

app.listen(3000);
